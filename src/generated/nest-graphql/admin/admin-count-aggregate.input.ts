import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdminCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    username?: true;

    @Field(() => Boolean, {nullable:true})
    password?: true;

    @Field(() => Boolean, {nullable:true})
    countryCode?: true;

    @Field(() => Boolean, {nullable:true})
    phoneNumber?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    roles?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
