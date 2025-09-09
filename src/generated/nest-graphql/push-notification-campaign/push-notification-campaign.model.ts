import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PushNotificationData } from '../push-notification-data/push-notification-data.model';
import { PushNotificationSenderListType } from '../prisma/push-notification-sender-list-type.enum';
import { EduInstituteSelectOption } from '../edu-institute-select-option/edu-institute-select-option.model';
import { PushNotificationCampaignFilters } from '../push-notification-campaign-filters/push-notification-campaign-filters.model';
import { PushNotificationCampaignStatus } from '../prisma/push-notification-campaign-status.enum';

@ObjectType()
export class PushNotificationCampaign {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => PushNotificationData, {nullable:false})
    notification?: PushNotificationData;

    @Field(() => PushNotificationSenderListType, {nullable:false})
    senderListType!: `${PushNotificationSenderListType}`;

    @Field(() => [EduInstituteSelectOption], {nullable:true})
    selectedEduInstitutes?: Array<EduInstituteSelectOption>;

    @Field(() => PushNotificationCampaignFilters, {nullable:false})
    filters?: PushNotificationCampaignFilters;

    @Field(() => PushNotificationCampaignStatus, {nullable:false})
    status!: `${PushNotificationCampaignStatus}`;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
