import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AppPopupCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    frequency?: true;

    @Field(() => Boolean, {nullable:true})
    selectionListType?: true;

    @Field(() => Boolean, {nullable:true})
    template?: true;

    @Field(() => Boolean, {nullable:true})
    image?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    ctaUrl?: true;

    @Field(() => Boolean, {nullable:true})
    ctaText?: true;

    @Field(() => Boolean, {nullable:true})
    couponCode?: true;

    @Field(() => Boolean, {nullable:true})
    delayInSeconds?: true;

    @Field(() => Boolean, {nullable:true})
    active?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
