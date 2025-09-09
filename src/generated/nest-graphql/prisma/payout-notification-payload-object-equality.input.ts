import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PayoutNotificationType } from './payout-notification-type.enum';

@InputType()
export class PayoutNotificationPayloadObjectEqualityInput {

    @Field(() => PayoutNotificationType, {nullable:false})
    type!: `${PayoutNotificationType}`;

    @Field(() => String, {nullable:false})
    conversationId!: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => String, {nullable:false})
    payoutID!: string;
}
