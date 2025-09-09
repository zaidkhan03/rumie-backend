import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PushNotificationCampaignStatus } from './push-notification-campaign-status.enum';
import { NestedEnumPushNotificationCampaignStatusFilter } from './nested-enum-push-notification-campaign-status-filter.input';

@InputType()
export class EnumPushNotificationCampaignStatusFilter {

    @Field(() => PushNotificationCampaignStatus, {nullable:true})
    equals?: `${PushNotificationCampaignStatus}`;

    @Field(() => [PushNotificationCampaignStatus], {nullable:true})
    in?: Array<`${PushNotificationCampaignStatus}`>;

    @Field(() => [PushNotificationCampaignStatus], {nullable:true})
    notIn?: Array<`${PushNotificationCampaignStatus}`>;

    @Field(() => NestedEnumPushNotificationCampaignStatusFilter, {nullable:true})
    not?: NestedEnumPushNotificationCampaignStatusFilter;
}
