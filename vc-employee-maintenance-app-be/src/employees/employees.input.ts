import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateEmployeeInput {
  @Field()
  id: string;

  @Field()
  department_id: string;
}
