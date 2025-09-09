import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PushNotificationSenderListType } from '../prisma/push-notification-sender-list-type.enum';
import { PushNotificationCampaignStatus } from '../prisma/push-notification-campaign-status.enum';

@ObjectType()
export class PushNotificationCampaignMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => PushNotificationSenderListType, {nullable:true})
    senderListType?: `${PushNotificationSenderListType}`;

    @Field(() => PushNotificationCampaignStatus, {nullable:true})
    status?: `${PushNotificationCampaignStatus}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
