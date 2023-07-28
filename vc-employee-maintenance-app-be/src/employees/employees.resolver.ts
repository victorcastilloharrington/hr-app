import { Resolver, Query, Args } from '@nestjs/graphql';
import { EmployeesService } from './employees.service';
import { Employee } from './employees.entity';

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
}
