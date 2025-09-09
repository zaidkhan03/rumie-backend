import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PayoutNotificationPayloadCreateInput } from './payout-notification-payload-create.input';
import { Type } from 'class-transformer';

@InputType()
export class PayoutNotificationPayloadCreateEnvelopeInput {

    @Field(() => PayoutNotificationPayloadCreateInput, {nullable:true})
    @Type(() => PayoutNotificationPayloadCreateInput)
    set?: PayoutNotificationPayloadCreateInput;
}
