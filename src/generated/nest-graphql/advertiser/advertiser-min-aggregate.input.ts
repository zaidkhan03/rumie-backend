import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdvertiserMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    companyName?: true;

    @Field(() => Boolean, {nullable:true})
    companyWebsiteUrl?: true;

    @Field(() => Boolean, {nullable:true})
    logo?: true;

    @Field(() => Boolean, {nullable:true})
    address1?: true;

    @Field(() => Boolean, {nullable:true})
    address2?: true;

    @Field(() => Boolean, {nullable:true})
    city?: true;

    @Field(() => Boolean, {nullable:true})
    state?: true;

    @Field(() => Boolean, {nullable:true})
    zip?: true;

    @Field(() => Boolean, {nullable:true})
    active?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
