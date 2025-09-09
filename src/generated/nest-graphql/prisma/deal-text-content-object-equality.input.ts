import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DealTextContentObjectEqualityInput {

    @Field(() => String, {nullable:false})
    heading!: string;

    @Field(() => String, {nullable:false})
    paragraph!: string;

    @Field(() => String, {nullable:false})
    pointers!: string;
}
