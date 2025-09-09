import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { OfferNotificationPayload } from '../offer-notification-payload/offer-notification-payload.model';
import { OrderNotificationPayload } from '../order-notification-payload/order-notification-payload.model';
import { PayoutNotificationPayload } from '../payout-notification-payload/payout-notification-payload.model';
import { SystemNotificationPayload } from '../system-notification-payload/system-notification-payload.model';
import { RentalNotificationPayload } from '../rental-notification-payload/rental-notification-payload.model';
import { CampusChatReplyNotficationPayload } from '../campus-chat-reply-notfication-payload/campus-chat-reply-notfication-payload.model';

@ObjectType()
export class NotificationPayloads {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => OfferNotificationPayload, {nullable:false})
    offer?: OfferNotificationPayload;

    @Field(() => OrderNotificationPayload, {nullable:false})
    order?: OrderNotificationPayload;

    @Field(() => PayoutNotificationPayload, {nullable:false})
    payout?: PayoutNotificationPayload;

    @Field(() => SystemNotificationPayload, {nullable:false})
    system?: SystemNotificationPayload;

    @Field(() => RentalNotificationPayload, {nullable:false})
    rental?: RentalNotificationPayload;

    @Field(() => CampusChatReplyNotficationPayload, {nullable:false})
    campusChatReply?: CampusChatReplyNotficationPayload;
}
