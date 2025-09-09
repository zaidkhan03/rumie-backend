import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConversationType } from '../prisma/conversation-type.enum';
import { Int } from '@nestjs/graphql';
import { ProductListingCreateNestedOneWithoutConversationsInput } from '../product-listing/product-listing-create-nested-one-without-conversations.input';

@InputType()
export class ConversationCreateWithoutParticipantsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    initiatedBy!: string;

    @Field(() => String, {nullable:true})
    lastMessageId?: string;

    @Field(() => Boolean, {nullable:true})
    valid?: boolean;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductListingCreateNestedOneWithoutConversationsInput, {nullable:false})
    product!: ProductListingCreateNestedOneWithoutConversationsInput;
}
