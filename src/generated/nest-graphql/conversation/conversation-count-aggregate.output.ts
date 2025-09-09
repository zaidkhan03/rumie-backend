import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ConversationCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    productId!: number;

    @Field(() => Int, {nullable:false})
    initiatedBy!: number;

    @Field(() => Int, {nullable:false})
    participantIds!: number;

    @Field(() => Int, {nullable:false})
    lastMessageId!: number;

    @Field(() => Int, {nullable:false})
    valid!: number;

    @Field(() => Int, {nullable:false})
    enabled!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    preferredPaymentMethod!: number;

    @Field(() => Int, {nullable:false})
    preferredAddressId!: number;

    @Field(() => Int, {nullable:false})
    paymentLinkSent!: number;

    @Field(() => Int, {nullable:false})
    deliveryConfirmedBySeller!: number;

    @Field(() => Int, {nullable:false})
    paymentLinkCount!: number;

    @Field(() => Int, {nullable:false})
    orderId!: number;

    @Field(() => Int, {nullable:false})
    payload!: number;

    @Field(() => Int, {nullable:false})
    consumersLastSeen!: number;

    @Field(() => Int, {nullable:false})
    providersLastSeen!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
