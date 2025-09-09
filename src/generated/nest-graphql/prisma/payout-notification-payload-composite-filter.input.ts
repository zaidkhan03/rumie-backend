import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PayoutNotificationPayloadObjectEqualityInput } from './payout-notification-payload-object-equality.input';
import { PayoutNotificationPayloadWhereInput } from '../payout-notification-payload/payout-notification-payload-where.input';

@InputType()
export class PayoutNotificationPayloadCompositeFilter {

    @Field(() => PayoutNotificationPayloadObjectEqualityInput, {nullable:true})
    equals?: PayoutNotificationPayloadObjectEqualityInput;

    @Field(() => PayoutNotificationPayloadWhereInput, {nullable:true})
    is?: PayoutNotificationPayloadWhereInput;

    @Field(() => PayoutNotificationPayloadWhereInput, {nullable:true})
    isNot?: PayoutNotificationPayloadWhereInput;
}
