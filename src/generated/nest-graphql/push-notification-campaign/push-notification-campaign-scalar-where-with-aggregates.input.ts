import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumPushNotificationSenderListTypeWithAggregatesFilter } from '../prisma/enum-push-notification-sender-list-type-with-aggregates-filter.input';
import { EnumPushNotificationCampaignStatusWithAggregatesFilter } from '../prisma/enum-push-notification-campaign-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PushNotificationCampaignScalarWhereWithAggregatesInput {

    @Field(() => [PushNotificationCampaignScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PushNotificationCampaignScalarWhereWithAggregatesInput>;

    @Field(() => [PushNotificationCampaignScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PushNotificationCampaignScalarWhereWithAggregatesInput>;

    @Field(() => [PushNotificationCampaignScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PushNotificationCampaignScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => EnumPushNotificationSenderListTypeWithAggregatesFilter, {nullable:true})
    senderListType?: EnumPushNotificationSenderListTypeWithAggregatesFilter;

    @Field(() => EnumPushNotificationCampaignStatusWithAggregatesFilter, {nullable:true})
    status?: EnumPushNotificationCampaignStatusWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
