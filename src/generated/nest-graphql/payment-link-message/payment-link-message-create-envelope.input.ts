import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentLinkMessageCreateInput } from './payment-link-message-create.input';
import { Type } from 'class-transformer';

@InputType()
export class PaymentLinkMessageCreateEnvelopeInput {

    @Field(() => PaymentLinkMessageCreateInput, {nullable:true})
    @Type(() => PaymentLinkMessageCreateInput)
    set?: PaymentLinkMessageCreateInput;
}
