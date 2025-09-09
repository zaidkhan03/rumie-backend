import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OfferNotificationPayloadOrderByInput } from '../offer-notification-payload/offer-notification-payload-order-by.input';
import { OrderNotificationPayloadOrderByInput } from '../order-notification-payload/order-notification-payload-order-by.input';
import { PayoutNotificationPayloadOrderByInput } from '../payout-notification-payload/payout-notification-payload-order-by.input';
import { SystemNotificationPayloadOrderByInput } from '../system-notification-payload/system-notification-payload-order-by.input';
import { RentalNotificationPayloadOrderByInput } from '../rental-notification-payload/rental-notification-payload-order-by.input';
import { CampusChatReplyNotficationPayloadOrderByInput } from '../campus-chat-reply-notfication-payload/campus-chat-reply-notfication-payload-order-by.input';

@InputType()
export class NotificationPayloadsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => OfferNotificationPayloadOrderByInput, {nullable:true})
    offer?: OfferNotificationPayloadOrderByInput;

    @Field(() => OrderNotificationPayloadOrderByInput, {nullable:true})
    order?: OrderNotificationPayloadOrderByInput;

    @Field(() => PayoutNotificationPayloadOrderByInput, {nullable:true})
    payout?: PayoutNotificationPayloadOrderByInput;

    @Field(() => SystemNotificationPayloadOrderByInput, {nullable:true})
    system?: SystemNotificationPayloadOrderByInput;

    @Field(() => RentalNotificationPayloadOrderByInput, {nullable:true})
    rental?: RentalNotificationPayloadOrderByInput;

    @Field(() => CampusChatReplyNotficationPayloadOrderByInput, {nullable:true})
    campusChatReply?: CampusChatReplyNotficationPayloadOrderByInput;
}
