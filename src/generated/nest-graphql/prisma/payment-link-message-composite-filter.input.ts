import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentLinkMessageObjectEqualityInput } from './payment-link-message-object-equality.input';
import { PaymentLinkMessageWhereInput } from '../payment-link-message/payment-link-message-where.input';

@InputType()
export class PaymentLinkMessageCompositeFilter {

    @Field(() => PaymentLinkMessageObjectEqualityInput, {nullable:true})
    equals?: PaymentLinkMessageObjectEqualityInput;

    @Field(() => PaymentLinkMessageWhereInput, {nullable:true})
    is?: PaymentLinkMessageWhereInput;

    @Field(() => PaymentLinkMessageWhereInput, {nullable:true})
    isNot?: PaymentLinkMessageWhereInput;
}
