import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OfferNotificationPayloadCreateEnvelopeInput } from '../offer-notification-payload/offer-notification-payload-create-envelope.input';
import { OrderNotificationPayloadCreateEnvelopeInput } from '../order-notification-payload/order-notification-payload-create-envelope.input';
import { PayoutNotificationPayloadCreateEnvelopeInput } from '../payout-notification-payload/payout-notification-payload-create-envelope.input';
import { SystemNotificationPayloadCreateEnvelopeInput } from '../system-notification-payload/system-notification-payload-create-envelope.input';
import { RentalNotificationPayloadCreateEnvelopeInput } from '../rental-notification-payload/rental-notification-payload-create-envelope.input';
import { CampusChatReplyNotficationPayloadCreateEnvelopeInput } from '../campus-chat-reply-notfication-payload/campus-chat-reply-notfication-payload-create-envelope.input';

@InputType()
export class NotificationPayloadsCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => OfferNotificationPayloadCreateEnvelopeInput, {nullable:false})
    offer!: OfferNotificationPayloadCreateEnvelopeInput;

    @Field(() => OrderNotificationPayloadCreateEnvelopeInput, {nullable:false})
    order!: OrderNotificationPayloadCreateEnvelopeInput;

    @Field(() => PayoutNotificationPayloadCreateEnvelopeInput, {nullable:false})
    payout!: PayoutNotificationPayloadCreateEnvelopeInput;

    @Field(() => SystemNotificationPayloadCreateEnvelopeInput, {nullable:false})
    system!: SystemNotificationPayloadCreateEnvelopeInput;

    @Field(() => RentalNotificationPayloadCreateEnvelopeInput, {nullable:false})
    rental!: RentalNotificationPayloadCreateEnvelopeInput;

    @Field(() => CampusChatReplyNotficationPayloadCreateEnvelopeInput, {nullable:false})
    campusChatReply!: CampusChatReplyNotficationPayloadCreateEnvelopeInput;
}
