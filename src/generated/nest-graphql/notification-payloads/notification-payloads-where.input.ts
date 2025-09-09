import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { OfferNotificationPayloadCompositeFilter } from '../prisma/offer-notification-payload-composite-filter.input';
import { OrderNotificationPayloadCompositeFilter } from '../prisma/order-notification-payload-composite-filter.input';
import { PayoutNotificationPayloadCompositeFilter } from '../prisma/payout-notification-payload-composite-filter.input';
import { SystemNotificationPayloadCompositeFilter } from '../prisma/system-notification-payload-composite-filter.input';
import { RentalNotificationPayloadCompositeFilter } from '../prisma/rental-notification-payload-composite-filter.input';
import { CampusChatReplyNotficationPayloadCompositeFilter } from '../prisma/campus-chat-reply-notfication-payload-composite-filter.input';

@InputType()
export class NotificationPayloadsWhereInput {

    @Field(() => [NotificationPayloadsWhereInput], {nullable:true})
    AND?: Array<NotificationPayloadsWhereInput>;

    @Field(() => [NotificationPayloadsWhereInput], {nullable:true})
    OR?: Array<NotificationPayloadsWhereInput>;

    @Field(() => [NotificationPayloadsWhereInput], {nullable:true})
    NOT?: Array<NotificationPayloadsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => OfferNotificationPayloadCompositeFilter, {nullable:true})
    offer?: OfferNotificationPayloadCompositeFilter;

    @Field(() => OrderNotificationPayloadCompositeFilter, {nullable:true})
    order?: OrderNotificationPayloadCompositeFilter;

    @Field(() => PayoutNotificationPayloadCompositeFilter, {nullable:true})
    payout?: PayoutNotificationPayloadCompositeFilter;

    @Field(() => SystemNotificationPayloadCompositeFilter, {nullable:true})
    system?: SystemNotificationPayloadCompositeFilter;

    @Field(() => RentalNotificationPayloadCompositeFilter, {nullable:true})
    rental?: RentalNotificationPayloadCompositeFilter;

    @Field(() => CampusChatReplyNotficationPayloadCompositeFilter, {nullable:true})
    campusChatReply?: CampusChatReplyNotficationPayloadCompositeFilter;
}
