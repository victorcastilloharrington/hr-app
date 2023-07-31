import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Department,
  DepartmentsOnEmployees,
} from 'src/departments/departments.entity';

@ObjectType()
export class Employee {
  @Field(() => Int)
  id: number;

  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  hiredate: Date;

  @Field()
  phone: string;

  @Field()
  address: string;

  @Field()
  isActive: boolean;

  @Field(() => Department)
  department: Department;

  @Field(() => [DepartmentsOnEmployees])
  DepartmentsOnEmployees: [DepartmentsOnEmployees];
}
