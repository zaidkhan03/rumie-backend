import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ConversationType } from '../prisma/conversation-type.enum';
import { Int } from '@nestjs/graphql';
import { ConversationCountAggregate } from './conversation-count-aggregate.output';
import { ConversationAvgAggregate } from './conversation-avg-aggregate.output';
import { ConversationSumAggregate } from './conversation-sum-aggregate.output';
import { ConversationMinAggregate } from './conversation-min-aggregate.output';
import { ConversationMaxAggregate } from './conversation-max-aggregate.output';

@ObjectType()
export class ConversationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => String, {nullable:false})
    initiatedBy!: string;

    @Field(() => [String], {nullable:true})
    participantIds?: Array<string>;

    @Field(() => String, {nullable:true})
    lastMessageId?: string;

    @Field(() => Boolean, {nullable:false})
    valid!: boolean;

    @Field(() => Boolean, {nullable:false})
    enabled!: boolean;

    @Field(() => ConversationType, {nullable:false})
    type!: `${ConversationType}`;

    @Field(() => String, {nullable:true})
    preferredPaymentMethod?: string;

    @Field(() => String, {nullable:true})
    preferredAddressId?: string;

    @Field(() => Boolean, {nullable:true})
    paymentLinkSent?: boolean;

    @Field(() => Boolean, {nullable:true})
    deliveryConfirmedBySeller?: boolean;

    @Field(() => Int, {nullable:true})
    paymentLinkCount?: number;

    @Field(() => String, {nullable:true})
    orderId?: string;

    @Field(() => String, {nullable:true})
    payload?: string;

    @Field(() => String, {nullable:true})
    consumersLastSeen?: string;

    @Field(() => String, {nullable:true})
    providersLastSeen?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ConversationCountAggregate, {nullable:true})
    _count?: ConversationCountAggregate;

    @Field(() => ConversationAvgAggregate, {nullable:true})
    _avg?: ConversationAvgAggregate;

    @Field(() => ConversationSumAggregate, {nullable:true})
    _sum?: ConversationSumAggregate;

    @Field(() => ConversationMinAggregate, {nullable:true})
    _min?: ConversationMinAggregate;

    @Field(() => ConversationMaxAggregate, {nullable:true})
    _max?: ConversationMaxAggregate;
}
