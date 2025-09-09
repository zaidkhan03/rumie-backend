import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentLinkStatus } from './payment-link-status.enum';

@InputType()
export class NestedEnumPaymentLinkStatusFilter {

    @Field(() => PaymentLinkStatus, {nullable:true})
    equals?: `${PaymentLinkStatus}`;

    @Field(() => [PaymentLinkStatus], {nullable:true})
    in?: Array<`${PaymentLinkStatus}`>;

    @Field(() => [PaymentLinkStatus], {nullable:true})
    notIn?: Array<`${PaymentLinkStatus}`>;

    @Field(() => NestedEnumPaymentLinkStatusFilter, {nullable:true})
    not?: NestedEnumPaymentLinkStatusFilter;
}
