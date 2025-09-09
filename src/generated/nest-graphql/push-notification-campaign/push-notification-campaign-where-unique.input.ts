import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PushNotificationCampaignWhereInput } from './push-notification-campaign-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PushNotificationDataCompositeFilter } from '../prisma/push-notification-data-composite-filter.input';
import { EnumPushNotificationSenderListTypeFilter } from '../prisma/enum-push-notification-sender-list-type-filter.input';
import { EduInstituteSelectOptionObjectEqualityInput } from '../prisma/edu-institute-select-option-object-equality.input';
import { PushNotificationCampaignFiltersCompositeFilter } from './push-notification-campaign-filters-composite-filter.input';
import { EnumPushNotificationCampaignStatusFilter } from '../prisma/enum-push-notification-campaign-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PushNotificationCampaignWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [PushNotificationCampaignWhereInput], {nullable:true})
    AND?: Array<PushNotificationCampaignWhereInput>;

    @Field(() => [PushNotificationCampaignWhereInput], {nullable:true})
    OR?: Array<PushNotificationCampaignWhereInput>;

    @Field(() => [PushNotificationCampaignWhereInput], {nullable:true})
    NOT?: Array<PushNotificationCampaignWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => PushNotificationDataCompositeFilter, {nullable:true})
    notification?: PushNotificationDataCompositeFilter;

    @Field(() => EnumPushNotificationSenderListTypeFilter, {nullable:true})
    senderListType?: EnumPushNotificationSenderListTypeFilter;

    @Field(() => [EduInstituteSelectOptionObjectEqualityInput], {nullable:true})
    selectedEduInstitutes?: Array<EduInstituteSelectOptionObjectEqualityInput>;

    @Field(() => PushNotificationCampaignFiltersCompositeFilter, {nullable:true})
    filters?: PushNotificationCampaignFiltersCompositeFilter;

    @Field(() => EnumPushNotificationCampaignStatusFilter, {nullable:true})
    status?: EnumPushNotificationCampaignStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
