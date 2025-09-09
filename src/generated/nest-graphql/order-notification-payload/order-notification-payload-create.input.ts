import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderNotificationType } from '../prisma/order-notification-type.enum';

@InputType()
export class OrderNotificationPayloadCreateInput {

    @Field(() => OrderNotificationType, {nullable:false})
    type!: `${OrderNotificationType}`;

    @Field(() => String, {nullable:false})
    conversationId!: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => String, {nullable:false})
    listingTitle!: string;
}
