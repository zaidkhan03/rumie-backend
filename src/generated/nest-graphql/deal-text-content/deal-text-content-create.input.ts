import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DealTextContentCreateInput {

    @Field(() => String, {nullable:true})
    heading?: string;

    @Field(() => String, {nullable:true})
    paragraph?: string;

    @Field(() => String, {nullable:true})
    pointers?: string;
}
