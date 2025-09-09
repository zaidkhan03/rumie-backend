import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    image?: true;

    @Field(() => Boolean, {nullable:true})
    url?: true;

    @Field(() => Boolean, {nullable:true})
    active?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    advertiserName?: true;

    @Field(() => Boolean, {nullable:true})
    advertiserId?: true;

    @Field(() => Boolean, {nullable:true})
    monthlyBudget?: true;

    @Field(() => Boolean, {nullable:true})
    priority?: true;
}
