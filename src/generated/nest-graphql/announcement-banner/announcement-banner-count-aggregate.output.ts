import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AnnouncementBannerCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    position!: number;

    @Field(() => Int, {nullable:false})
    hasInternalCTA!: number;

    @Field(() => Int, {nullable:false})
    internalCTA!: number;

    @Field(() => Int, {nullable:false})
    image!: number;

    @Field(() => Int, {nullable:false})
    active!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
