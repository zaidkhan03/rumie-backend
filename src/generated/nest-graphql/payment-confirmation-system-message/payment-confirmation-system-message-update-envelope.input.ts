import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentConfirmationSystemMessageCreateInput } from './payment-confirmation-system-message-create.input';
import { Type } from 'class-transformer';
import { PaymentConfirmationSystemMessageUpdateInput } from './payment-confirmation-system-message-update.input';

@InputType()
export class PaymentConfirmationSystemMessageUpdateEnvelopeInput {

    @Field(() => PaymentConfirmationSystemMessageCreateInput, {nullable:true})
    @Type(() => PaymentConfirmationSystemMessageCreateInput)
    set?: PaymentConfirmationSystemMessageCreateInput;

    @Field(() => PaymentConfirmationSystemMessageUpdateInput, {nullable:true})
    @Type(() => PaymentConfirmationSystemMessageUpdateInput)
    update?: PaymentConfirmationSystemMessageUpdateInput;
}
