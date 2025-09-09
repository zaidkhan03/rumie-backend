import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumOrderNotificationTypeFilter } from '../prisma/enum-order-notification-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class OrderNotificationPayloadWhereInput {

    @Field(() => [OrderNotificationPayloadWhereInput], {nullable:true})
    AND?: Array<OrderNotificationPayloadWhereInput>;

    @Field(() => [OrderNotificationPayloadWhereInput], {nullable:true})
    OR?: Array<OrderNotificationPayloadWhereInput>;

    @Field(() => [OrderNotificationPayloadWhereInput], {nullable:true})
    NOT?: Array<OrderNotificationPayloadWhereInput>;

    @Field(() => EnumOrderNotificationTypeFilter, {nullable:true})
    type?: EnumOrderNotificationTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    conversationId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    orderId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    listingTitle?: StringFilter;
}
