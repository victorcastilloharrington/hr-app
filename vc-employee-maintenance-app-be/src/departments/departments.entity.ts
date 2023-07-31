import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Department {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}

@ObjectType()
export class DepartmentsOnEmployees {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  employee_id: number;

  @Field(() => Int)
  department_id: number;

  @Field()
  assignedAt: Date;
}
