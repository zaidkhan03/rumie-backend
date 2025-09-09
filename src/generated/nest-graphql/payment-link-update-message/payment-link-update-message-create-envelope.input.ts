import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentLinkUpdateMessageCreateInput } from './payment-link-update-message-create.input';
import { Type } from 'class-transformer';

@InputType()
export class PaymentLinkUpdateMessageCreateEnvelopeInput {

    @Field(() => PaymentLinkUpdateMessageCreateInput, {nullable:true})
    @Type(() => PaymentLinkUpdateMessageCreateInput)
    set?: PaymentLinkUpdateMessageCreateInput;
}
