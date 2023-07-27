import { Int, Resolver, Query } from '@nestjs/graphql';
import { EmployeesService } from './employees.service';
import { Employee } from './employees.entity';

@Resolver(() => Employee)
export class EmployeesResolver {
  constructor(private employeesService: EmployeesService) {}

  @Query(() => Int, { name: 'GetEmployeeById' })
  async findOneById() {
    return this.employeesService.findOneById();
  }
}
