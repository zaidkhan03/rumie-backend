import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConversationCreateparticipantIdsInput } from './conversation-createparticipant-ids.input';
import { ConversationType } from '../prisma/conversation-type.enum';
import { Int } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutConversationsInput } from '../user/user-unchecked-create-nested-many-without-conversations.input';

@InputType()
export class ConversationUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => String, {nullable:false})
    initiatedBy!: string;

    @Field(() => ConversationCreateparticipantIdsInput, {nullable:true})
    participantIds?: ConversationCreateparticipantIdsInput;

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

    @Field(() => UserUncheckedCreateNestedManyWithoutConversationsInput, {nullable:true})
    participants?: UserUncheckedCreateNestedManyWithoutConversationsInput;
}
