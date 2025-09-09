import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ConversationMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    productId?: true;

    @Field(() => Boolean, {nullable:true})
    initiatedBy?: true;

    @Field(() => Boolean, {nullable:true})
    lastMessageId?: true;

    @Field(() => Boolean, {nullable:true})
    valid?: true;

    @Field(() => Boolean, {nullable:true})
    enabled?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    preferredPaymentMethod?: true;

    @Field(() => Boolean, {nullable:true})
    preferredAddressId?: true;

    @Field(() => Boolean, {nullable:true})
    paymentLinkSent?: true;

    @Field(() => Boolean, {nullable:true})
    deliveryConfirmedBySeller?: true;

    @Field(() => Boolean, {nullable:true})
    paymentLinkCount?: true;

    @Field(() => Boolean, {nullable:true})
    orderId?: true;

    @Field(() => Boolean, {nullable:true})
    payload?: true;

    @Field(() => Boolean, {nullable:true})
    consumersLastSeen?: true;

    @Field(() => Boolean, {nullable:true})
    providersLastSeen?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
