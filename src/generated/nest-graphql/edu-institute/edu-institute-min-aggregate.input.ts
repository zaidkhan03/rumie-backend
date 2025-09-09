import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EduInstituteMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    domain?: true;

    @Field(() => Boolean, {nullable:true})
    logo?: true;

    @Field(() => Boolean, {nullable:true})
    city?: true;

    @Field(() => Boolean, {nullable:true})
    state?: true;

    @Field(() => Boolean, {nullable:true})
    address?: true;

    @Field(() => Boolean, {nullable:true})
    zip?: true;

    @Field(() => Boolean, {nullable:true})
    location?: true;

    @Field(() => Boolean, {nullable:true})
    active?: true;

    @Field(() => Boolean, {nullable:true})
    passCode?: true;

    @Field(() => Boolean, {nullable:true})
    isRegistered?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
