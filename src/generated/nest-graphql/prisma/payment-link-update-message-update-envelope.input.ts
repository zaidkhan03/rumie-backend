import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentLinkUpdateMessageCreateInput } from '../payment-link-update-message/payment-link-update-message-create.input';
import { Type } from 'class-transformer';
import { PaymentLinkUpdateMessageUpdateInput } from '../payment-link-update-message/payment-link-update-message-update.input';

@InputType()
export class PaymentLinkUpdateMessageUpdateEnvelopeInput {

    @Field(() => PaymentLinkUpdateMessageCreateInput, {nullable:true})
    @Type(() => PaymentLinkUpdateMessageCreateInput)
    set?: PaymentLinkUpdateMessageCreateInput;

    @Field(() => PaymentLinkUpdateMessageUpdateInput, {nullable:true})
    @Type(() => PaymentLinkUpdateMessageUpdateInput)
    update?: PaymentLinkUpdateMessageUpdateInput;
}
