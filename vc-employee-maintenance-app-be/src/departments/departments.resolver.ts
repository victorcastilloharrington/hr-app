import { Query, Resolver } from '@nestjs/graphql';
import { DepartmentsService } from './departments.service';
import { Department } from './departments.entity';

@Resolver()
export class DepartmentsResolver {
  constructor(private departmentsService: DepartmentsService) {}

  @Query(() => [Department], { name: 'GetAllDepartments' })
  async departments() {
    return this.departmentsService.findAll();
  }
}
