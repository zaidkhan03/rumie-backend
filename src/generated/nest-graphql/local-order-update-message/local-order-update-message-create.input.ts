import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LocalOrderUpdateMessageCreateInput {

    @Field(() => String, {nullable:false})
    heading!: string;

    @Field(() => String, {nullable:false})
    description!: string;
}
