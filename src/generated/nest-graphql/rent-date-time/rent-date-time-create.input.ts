import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RentDateTimeCreateInput {

    @Field(() => String, {nullable:false})
    date!: string;

    @Field(() => String, {nullable:false})
    time!: string;
}
