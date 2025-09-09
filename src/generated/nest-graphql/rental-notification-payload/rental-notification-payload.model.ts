import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RentalNotificationType } from '../prisma/rental-notification-type.enum';

@ObjectType()
export class RentalNotificationPayload {

    @Field(() => RentalNotificationType, {nullable:false})
    type!: `${RentalNotificationType}`;

    @Field(() => String, {nullable:false})
    conversationId!: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => String, {nullable:false})
    listingTitle!: string;
}
