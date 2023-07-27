import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Department } from 'src/departments/departments.entity';

@ObjectType()
export class Employee {
  @Field(() => Int)
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  hireDate: Date;

  @Field()
  phone: string;

  @Field()
  address: string;

  @Field(() => Department)
  department: Department;
}
