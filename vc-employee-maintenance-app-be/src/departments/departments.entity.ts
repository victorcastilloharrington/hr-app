import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Department {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
