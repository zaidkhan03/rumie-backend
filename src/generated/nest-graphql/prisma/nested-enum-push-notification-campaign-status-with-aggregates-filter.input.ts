import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PushNotificationCampaignStatus } from './push-notification-campaign-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPushNotificationCampaignStatusFilter } from './nested-enum-push-notification-campaign-status-filter.input';

@InputType()
export class NestedEnumPushNotificationCampaignStatusWithAggregatesFilter {

    @Field(() => PushNotificationCampaignStatus, {nullable:true})
    equals?: `${PushNotificationCampaignStatus}`;

    @Field(() => [PushNotificationCampaignStatus], {nullable:true})
    in?: Array<`${PushNotificationCampaignStatus}`>;

    @Field(() => [PushNotificationCampaignStatus], {nullable:true})
    notIn?: Array<`${PushNotificationCampaignStatus}`>;

    @Field(() => NestedEnumPushNotificationCampaignStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPushNotificationCampaignStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPushNotificationCampaignStatusFilter, {nullable:true})
    _min?: NestedEnumPushNotificationCampaignStatusFilter;

    @Field(() => NestedEnumPushNotificationCampaignStatusFilter, {nullable:true})
    _max?: NestedEnumPushNotificationCampaignStatusFilter;
}
