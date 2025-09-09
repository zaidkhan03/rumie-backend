import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentConfirmationSystemMessageObjectEqualityInput } from './payment-confirmation-system-message-object-equality.input';
import { PaymentConfirmationSystemMessageWhereInput } from '../payment-confirmation-system-message/payment-confirmation-system-message-where.input';

@InputType()
export class PaymentConfirmationSystemMessageCompositeFilter {

    @Field(() => PaymentConfirmationSystemMessageObjectEqualityInput, {nullable:true})
    equals?: PaymentConfirmationSystemMessageObjectEqualityInput;

    @Field(() => PaymentConfirmationSystemMessageWhereInput, {nullable:true})
    is?: PaymentConfirmationSystemMessageWhereInput;

    @Field(() => PaymentConfirmationSystemMessageWhereInput, {nullable:true})
    isNot?: PaymentConfirmationSystemMessageWhereInput;
}
