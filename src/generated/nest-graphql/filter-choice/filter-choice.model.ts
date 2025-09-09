import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FilterChoice {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    value!: string;
}
