import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EduInstituteCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    domain!: number;

    @Field(() => Int, {nullable:false})
    logo!: number;

    @Field(() => Int, {nullable:false})
    city!: number;

    @Field(() => Int, {nullable:false})
    state!: number;

    @Field(() => Int, {nullable:false})
    address!: number;

    @Field(() => Int, {nullable:false})
    zip!: number;

    @Field(() => Int, {nullable:false})
    location!: number;

    @Field(() => Int, {nullable:false})
    active!: number;

    @Field(() => Int, {nullable:false})
    passCode!: number;

    @Field(() => Int, {nullable:false})
    isRegistered!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
