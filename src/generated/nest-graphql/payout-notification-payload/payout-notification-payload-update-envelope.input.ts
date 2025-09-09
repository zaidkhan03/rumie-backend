import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PayoutNotificationPayloadCreateInput } from './payout-notification-payload-create.input';
import { Type } from 'class-transformer';
import { PayoutNotificationPayloadUpdateInput } from './payout-notification-payload-update.input';

@InputType()
export class PayoutNotificationPayloadUpdateEnvelopeInput {

    @Field(() => PayoutNotificationPayloadCreateInput, {nullable:true})
    @Type(() => PayoutNotificationPayloadCreateInput)
    set?: PayoutNotificationPayloadCreateInput;

    @Field(() => PayoutNotificationPayloadUpdateInput, {nullable:true})
    @Type(() => PayoutNotificationPayloadUpdateInput)
    update?: PayoutNotificationPayloadUpdateInput;
}
