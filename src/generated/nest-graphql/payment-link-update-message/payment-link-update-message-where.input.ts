import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumPaymentLinkStatusFilter } from '../prisma/enum-payment-link-status-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class PaymentLinkUpdateMessageWhereInput {

    @Field(() => [PaymentLinkUpdateMessageWhereInput], {nullable:true})
    AND?: Array<PaymentLinkUpdateMessageWhereInput>;

    @Field(() => [PaymentLinkUpdateMessageWhereInput], {nullable:true})
    OR?: Array<PaymentLinkUpdateMessageWhereInput>;

    @Field(() => [PaymentLinkUpdateMessageWhereInput], {nullable:true})
    NOT?: Array<PaymentLinkUpdateMessageWhereInput>;

    @Field(() => EnumPaymentLinkStatusFilter, {nullable:true})
    status?: EnumPaymentLinkStatusFilter;

    @Field(() => StringFilter, {nullable:true})
    amount?: StringFilter;
}
