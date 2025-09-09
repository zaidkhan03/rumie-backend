import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConversationWhereInput } from './conversation-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumConversationTypeFilter } from '../prisma/enum-conversation-type-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductListingRelationFilter } from '../product-listing/product-listing-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class ConversationWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ConversationWhereInput], {nullable:true})
    AND?: Array<ConversationWhereInput>;

    @Field(() => [ConversationWhereInput], {nullable:true})
    OR?: Array<ConversationWhereInput>;

    @Field(() => [ConversationWhereInput], {nullable:true})
    NOT?: Array<ConversationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    initiatedBy?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    participantIds?: StringNullableListFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    lastMessageId?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    valid?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;

    @Field(() => EnumConversationTypeFilter, {nullable:true})
    type?: EnumConversationTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    preferredPaymentMethod?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    preferredAddressId?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    paymentLinkSent?: BoolNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    deliveryConfirmedBySeller?: BoolNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    paymentLinkCount?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    orderId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    payload?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    consumersLastSeen?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    providersLastSeen?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProductListingRelationFilter, {nullable:true})
    product?: ProductListingRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    participants?: UserListRelationFilter;
}
