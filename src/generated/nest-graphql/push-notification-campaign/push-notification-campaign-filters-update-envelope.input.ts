import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PushNotificationCampaignFiltersCreateInput } from '../push-notification-campaign-filters/push-notification-campaign-filters-create.input';
import { Type } from 'class-transformer';
import { PushNotificationCampaignFiltersUpdateInput } from '../push-notification-campaign-filters/push-notification-campaign-filters-update.input';

@InputType()
export class PushNotificationCampaignFiltersUpdateEnvelopeInput {

    @Field(() => PushNotificationCampaignFiltersCreateInput, {nullable:true})
    @Type(() => PushNotificationCampaignFiltersCreateInput)
    set?: PushNotificationCampaignFiltersCreateInput;

    @Field(() => PushNotificationCampaignFiltersUpdateInput, {nullable:true})
    @Type(() => PushNotificationCampaignFiltersUpdateInput)
    update?: PushNotificationCampaignFiltersUpdateInput;
}
