import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PayoutNotificationType } from '../prisma/payout-notification-type.enum';

@ObjectType()
export class PayoutNotificationPayload {

    @Field(() => PayoutNotificationType, {nullable:false})
    type!: `${PayoutNotificationType}`;

    @Field(() => String, {nullable:false})
    conversationId!: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => String, {nullable:false})
    payoutID!: string;
}
