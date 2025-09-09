import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AnnouncementBannerMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    position?: true;

    @Field(() => Boolean, {nullable:true})
    hasInternalCTA?: true;

    @Field(() => Boolean, {nullable:true})
    internalCTA?: true;

    @Field(() => Boolean, {nullable:true})
    image?: true;

    @Field(() => Boolean, {nullable:true})
    active?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
