import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentConfirmationSystemMessageCreateInput } from './payment-confirmation-system-message-create.input';
import { Type } from 'class-transformer';

@InputType()
export class PaymentConfirmationSystemMessageCreateEnvelopeInput {

    @Field(() => PaymentConfirmationSystemMessageCreateInput, {nullable:true})
    @Type(() => PaymentConfirmationSystemMessageCreateInput)
    set?: PaymentConfirmationSystemMessageCreateInput;
}
