import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class EduInstituteMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    domain?: string;

    @Field(() => String, {nullable:true})
    logo?: string;

    @Field(() => String, {nullable:true})
    city?: string;

    @Field(() => String, {nullable:true})
    state?: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    zip?: string;

    @Field(() => String, {nullable:true})
    location?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => String, {nullable:true})
    passCode?: string;

    @Field(() => Boolean, {nullable:true})
    isRegistered?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
