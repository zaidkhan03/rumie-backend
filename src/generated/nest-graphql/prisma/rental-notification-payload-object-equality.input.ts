import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentalNotificationType } from './rental-notification-type.enum';

@InputType()
export class RentalNotificationPayloadObjectEqualityInput {

    @Field(() => RentalNotificationType, {nullable:false})
    type!: `${RentalNotificationType}`;

    @Field(() => String, {nullable:false})
    conversationId!: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => String, {nullable:false})
    listingTitle!: string;
}
