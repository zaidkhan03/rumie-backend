import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentLinkUpdateMessageObjectEqualityInput } from './payment-link-update-message-object-equality.input';
import { PaymentLinkUpdateMessageWhereInput } from '../payment-link-update-message/payment-link-update-message-where.input';

@InputType()
export class PaymentLinkUpdateMessageCompositeFilter {

    @Field(() => PaymentLinkUpdateMessageObjectEqualityInput, {nullable:true})
    equals?: PaymentLinkUpdateMessageObjectEqualityInput;

    @Field(() => PaymentLinkUpdateMessageWhereInput, {nullable:true})
    is?: PaymentLinkUpdateMessageWhereInput;

    @Field(() => PaymentLinkUpdateMessageWhereInput, {nullable:true})
    isNot?: PaymentLinkUpdateMessageWhereInput;
}
