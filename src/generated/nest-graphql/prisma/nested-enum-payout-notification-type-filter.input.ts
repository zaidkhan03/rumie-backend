import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PayoutNotificationType } from './payout-notification-type.enum';

@InputType()
export class NestedEnumPayoutNotificationTypeFilter {

    @Field(() => PayoutNotificationType, {nullable:true})
    equals?: `${PayoutNotificationType}`;

    @Field(() => [PayoutNotificationType], {nullable:true})
    in?: Array<`${PayoutNotificationType}`>;

    @Field(() => [PayoutNotificationType], {nullable:true})
    notIn?: Array<`${PayoutNotificationType}`>;

    @Field(() => NestedEnumPayoutNotificationTypeFilter, {nullable:true})
    not?: NestedEnumPayoutNotificationTypeFilter;
}
