import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OrderNotificationType } from '../prisma/order-notification-type.enum';

@ObjectType()
export class OrderNotificationPayload {

    @Field(() => OrderNotificationType, {nullable:false})
    type!: `${OrderNotificationType}`;

    @Field(() => String, {nullable:false})
    conversationId!: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => String, {nullable:false})
    listingTitle!: string;
}
