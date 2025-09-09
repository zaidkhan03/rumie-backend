import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumSystemIconsFilter } from '../prisma/enum-system-icons-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { EnumConversationTypeNullableFilter } from '../prisma/enum-conversation-type-nullable-filter.input';

@InputType()
export class PaymentConfirmationSystemMessageWhereInput {

    @Field(() => [PaymentConfirmationSystemMessageWhereInput], {nullable:true})
    AND?: Array<PaymentConfirmationSystemMessageWhereInput>;

    @Field(() => [PaymentConfirmationSystemMessageWhereInput], {nullable:true})
    OR?: Array<PaymentConfirmationSystemMessageWhereInput>;

    @Field(() => [PaymentConfirmationSystemMessageWhereInput], {nullable:true})
    NOT?: Array<PaymentConfirmationSystemMessageWhereInput>;

    @Field(() => EnumSystemIconsFilter, {nullable:true})
    icon?: EnumSystemIconsFilter;

    @Field(() => StringFilter, {nullable:true})
    text1?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text2?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    shippingAddress?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    note?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    orderId?: StringFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    localTxn?: BoolNullableFilter;

    @Field(() => EnumConversationTypeNullableFilter, {nullable:true})
    conversationType?: EnumConversationTypeNullableFilter;
}
