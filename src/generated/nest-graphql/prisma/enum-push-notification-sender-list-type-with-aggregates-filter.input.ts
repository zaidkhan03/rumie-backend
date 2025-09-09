import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PushNotificationSenderListType } from './push-notification-sender-list-type.enum';
import { NestedEnumPushNotificationSenderListTypeWithAggregatesFilter } from './nested-enum-push-notification-sender-list-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPushNotificationSenderListTypeFilter } from './nested-enum-push-notification-sender-list-type-filter.input';

@InputType()
export class EnumPushNotificationSenderListTypeWithAggregatesFilter {

    @Field(() => PushNotificationSenderListType, {nullable:true})
    equals?: `${PushNotificationSenderListType}`;

    @Field(() => [PushNotificationSenderListType], {nullable:true})
    in?: Array<`${PushNotificationSenderListType}`>;

    @Field(() => [PushNotificationSenderListType], {nullable:true})
    notIn?: Array<`${PushNotificationSenderListType}`>;

    @Field(() => NestedEnumPushNotificationSenderListTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPushNotificationSenderListTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPushNotificationSenderListTypeFilter, {nullable:true})
    _min?: NestedEnumPushNotificationSenderListTypeFilter;

    @Field(() => NestedEnumPushNotificationSenderListTypeFilter, {nullable:true})
    _max?: NestedEnumPushNotificationSenderListTypeFilter;
}
