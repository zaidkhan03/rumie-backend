import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentLinkMessageCreateInput } from './payment-link-message-create.input';
import { Type } from 'class-transformer';
import { PaymentLinkMessageUpdateInput } from './payment-link-message-update.input';

@InputType()
export class PaymentLinkMessageUpdateEnvelopeInput {

    @Field(() => PaymentLinkMessageCreateInput, {nullable:true})
    @Type(() => PaymentLinkMessageCreateInput)
    set?: PaymentLinkMessageCreateInput;

    @Field(() => PaymentLinkMessageUpdateInput, {nullable:true})
    @Type(() => PaymentLinkMessageUpdateInput)
    update?: PaymentLinkMessageUpdateInput;
}
