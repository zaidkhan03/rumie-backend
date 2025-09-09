import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PushNotificationCampaignCountAggregate } from './push-notification-campaign-count-aggregate.output';
import { PushNotificationCampaignMinAggregate } from './push-notification-campaign-min-aggregate.output';
import { PushNotificationCampaignMaxAggregate } from './push-notification-campaign-max-aggregate.output';

@ObjectType()
export class AggregatePushNotificationCampaign {

    @Field(() => PushNotificationCampaignCountAggregate, {nullable:true})
    _count?: PushNotificationCampaignCountAggregate;

    @Field(() => PushNotificationCampaignMinAggregate, {nullable:true})
    _min?: PushNotificationCampaignMinAggregate;

    @Field(() => PushNotificationCampaignMaxAggregate, {nullable:true})
    _max?: PushNotificationCampaignMaxAggregate;
}
