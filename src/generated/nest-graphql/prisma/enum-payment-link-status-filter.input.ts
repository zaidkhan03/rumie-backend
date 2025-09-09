import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentLinkStatus } from './payment-link-status.enum';
import { NestedEnumPaymentLinkStatusFilter } from './nested-enum-payment-link-status-filter.input';

@InputType()
export class EnumPaymentLinkStatusFilter {

    @Field(() => PaymentLinkStatus, {nullable:true})
    equals?: `${PaymentLinkStatus}`;

    @Field(() => [PaymentLinkStatus], {nullable:true})
    in?: Array<`${PaymentLinkStatus}`>;

    @Field(() => [PaymentLinkStatus], {nullable:true})
    notIn?: Array<`${PaymentLinkStatus}`>;

    @Field(() => NestedEnumPaymentLinkStatusFilter, {nullable:true})
    not?: NestedEnumPaymentLinkStatusFilter;
}
