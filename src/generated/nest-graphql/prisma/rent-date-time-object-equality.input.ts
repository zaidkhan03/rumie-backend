import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RentDateTimeObjectEqualityInput {

    @Field(() => String, {nullable:false})
    date!: string;

    @Field(() => String, {nullable:false})
    time!: string;
}
