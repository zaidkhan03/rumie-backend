import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SystemIcons } from '../prisma/system-icons.enum';
import { ConversationType } from '../prisma/conversation-type.enum';

@InputType()
export class PaymentConfirmationSystemMessageCreateInput {

    @Field(() => SystemIcons, {nullable:false})
    icon!: `${SystemIcons}`;

    @Field(() => String, {nullable:false})
    text1!: string;

    @Field(() => String, {nullable:false})
    text2!: string;

    @Field(() => String, {nullable:false})
    shippingAddress!: string;

    @Field(() => String, {nullable:false})
    note!: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => Boolean, {nullable:true})
    localTxn?: boolean;

    @Field(() => ConversationType, {nullable:true})
    conversationType?: `${ConversationType}`;
}
