import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PushNotificationCampaignFiltersObjectEqualityInput } from './push-notification-campaign-filters-object-equality.input';
import { PushNotificationCampaignFiltersWhereInput } from '../push-notification-campaign-filters/push-notification-campaign-filters-where.input';

@InputType()
export class PushNotificationCampaignFiltersCompositeFilter {

    @Field(() => PushNotificationCampaignFiltersObjectEqualityInput, {nullable:true})
    equals?: PushNotificationCampaignFiltersObjectEqualityInput;

    @Field(() => PushNotificationCampaignFiltersWhereInput, {nullable:true})
    is?: PushNotificationCampaignFiltersWhereInput;

    @Field(() => PushNotificationCampaignFiltersWhereInput, {nullable:true})
    isNot?: PushNotificationCampaignFiltersWhereInput;
}
