import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SupportTicketCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    issue!: number;

    @Field(() => Int, {nullable:false})
    initiator!: number;

    @Field(() => Int, {nullable:false})
    associatedUserId!: number;

    @Field(() => Int, {nullable:false})
    resolved!: number;

    @Field(() => Int, {nullable:false})
    concernedId!: number;

    @Field(() => Int, {nullable:false})
    userLastSeen!: number;

    @Field(() => Int, {nullable:false})
    adminLastSeen!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
