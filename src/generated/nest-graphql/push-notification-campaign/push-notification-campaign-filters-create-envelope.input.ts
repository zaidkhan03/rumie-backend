import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PushNotificationCampaignFiltersCreateInput } from '../push-notification-campaign-filters/push-notification-campaign-filters-create.input';
import { Type } from 'class-transformer';

@InputType()
export class PushNotificationCampaignFiltersCreateEnvelopeInput {

    @Field(() => PushNotificationCampaignFiltersCreateInput, {nullable:true})
    @Type(() => PushNotificationCampaignFiltersCreateInput)
    set?: PushNotificationCampaignFiltersCreateInput;
}
