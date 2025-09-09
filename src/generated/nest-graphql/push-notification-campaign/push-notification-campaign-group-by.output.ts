import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PushNotificationSenderListType } from '../prisma/push-notification-sender-list-type.enum';
import { PushNotificationCampaignStatus } from '../prisma/push-notification-campaign-status.enum';
import { PushNotificationCampaignCountAggregate } from './push-notification-campaign-count-aggregate.output';
import { PushNotificationCampaignMinAggregate } from './push-notification-campaign-min-aggregate.output';
import { PushNotificationCampaignMaxAggregate } from './push-notification-campaign-max-aggregate.output';

@ObjectType()
export class PushNotificationCampaignGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => PushNotificationSenderListType, {nullable:false})
    senderListType!: `${PushNotificationSenderListType}`;

    @Field(() => PushNotificationCampaignStatus, {nullable:false})
    status!: `${PushNotificationCampaignStatus}`;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PushNotificationCampaignCountAggregate, {nullable:true})
    _count?: PushNotificationCampaignCountAggregate;

    @Field(() => PushNotificationCampaignMinAggregate, {nullable:true})
    _min?: PushNotificationCampaignMinAggregate;

    @Field(() => PushNotificationCampaignMaxAggregate, {nullable:true})
    _max?: PushNotificationCampaignMaxAggregate;
}
