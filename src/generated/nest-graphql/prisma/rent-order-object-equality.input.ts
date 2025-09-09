import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RentOrderObjectEqualityInput {

    @Field(() => String, {nullable:true})
    startDate?: string;

    @Field(() => String, {nullable:true})
    endDate?: string;

    @Field(() => [String], {nullable:true})
    initialImages?: Array<string>;

    @Field(() => [String], {nullable:true})
    completionImages?: Array<string>;
}
