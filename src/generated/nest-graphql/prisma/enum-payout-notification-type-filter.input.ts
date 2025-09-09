import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PayoutNotificationType } from './payout-notification-type.enum';
import { NestedEnumPayoutNotificationTypeFilter } from './nested-enum-payout-notification-type-filter.input';

@InputType()
export class EnumPayoutNotificationTypeFilter {

    @Field(() => PayoutNotificationType, {nullable:true})
    equals?: `${PayoutNotificationType}`;

    @Field(() => [PayoutNotificationType], {nullable:true})
    in?: Array<`${PayoutNotificationType}`>;

    @Field(() => [PayoutNotificationType], {nullable:true})
    notIn?: Array<`${PayoutNotificationType}`>;

    @Field(() => NestedEnumPayoutNotificationTypeFilter, {nullable:true})
    not?: NestedEnumPayoutNotificationTypeFilter;
}
