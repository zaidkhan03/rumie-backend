import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OfferNotificationPayloadUpdateEnvelopeInput } from '../offer-notification-payload/offer-notification-payload-update-envelope.input';
import { OrderNotificationPayloadUpdateEnvelopeInput } from '../order-notification-payload/order-notification-payload-update-envelope.input';
import { PayoutNotificationPayloadUpdateEnvelopeInput } from '../payout-notification-payload/payout-notification-payload-update-envelope.input';
import { SystemNotificationPayloadUpdateEnvelopeInput } from '../system-notification-payload/system-notification-payload-update-envelope.input';
import { RentalNotificationPayloadUpdateEnvelopeInput } from '../rental-notification-payload/rental-notification-payload-update-envelope.input';
import { CampusChatReplyNotficationPayloadUpdateEnvelopeInput } from '../campus-chat-reply-notfication-payload/campus-chat-reply-notfication-payload-update-envelope.input';

@InputType()
export class NotificationPayloadsUpdateInput {

    @Field(() => OfferNotificationPayloadUpdateEnvelopeInput, {nullable:true})
    offer?: OfferNotificationPayloadUpdateEnvelopeInput;

    @Field(() => OrderNotificationPayloadUpdateEnvelopeInput, {nullable:true})
    order?: OrderNotificationPayloadUpdateEnvelopeInput;

    @Field(() => PayoutNotificationPayloadUpdateEnvelopeInput, {nullable:true})
    payout?: PayoutNotificationPayloadUpdateEnvelopeInput;

    @Field(() => SystemNotificationPayloadUpdateEnvelopeInput, {nullable:true})
    system?: SystemNotificationPayloadUpdateEnvelopeInput;

    @Field(() => RentalNotificationPayloadUpdateEnvelopeInput, {nullable:true})
    rental?: RentalNotificationPayloadUpdateEnvelopeInput;

    @Field(() => CampusChatReplyNotficationPayloadUpdateEnvelopeInput, {nullable:true})
    campusChatReply?: CampusChatReplyNotficationPayloadUpdateEnvelopeInput;
}
