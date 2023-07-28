import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { EmployeesService } from './employees.service';
import { Employee } from './employees.entity';
import { UpdateEmployeeInput } from './employees.input';

@Resolver(() => Employee)
export class EmployeesResolver {
  constructor(private employeesService: EmployeesService) {}

  @Query(() => Employee, { name: 'GetEmployeeById' })
  async employee(@Args('id', { type: () => String }) id: string) {
    return this.employeesService.findOneById({ id: Number(id) });
  }

  @Query(() => [Employee], { name: 'GetAllEmployees' })
  async employees() {
    return this.employeesService.findAll();
  }

  @Mutation(() => Employee, { name: 'UpdateEmployee' })
  async update(
    @Args('updateEmployeeData') updateEmployeeData: UpdateEmployeeInput,
  ) {
    return this.employeesService.update({
      where: { id: Number(updateEmployeeData.id) },
      data: { department_id: Number(updateEmployeeData.department_id) },
    });
  }

  @Mutation(() => Employee, { name: 'DeleteEmployee' })
  async delete(@Args({ name: 'id', type: () => String }) id: string) {
    return this.employeesService.delete({ id: Number(id) });
  }
}
