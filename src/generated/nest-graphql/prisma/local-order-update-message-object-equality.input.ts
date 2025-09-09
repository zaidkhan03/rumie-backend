import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LocalOrderUpdateMessageObjectEqualityInput {

    @Field(() => String, {nullable:false})
    heading!: string;

    @Field(() => String, {nullable:false})
    description!: string;
}
