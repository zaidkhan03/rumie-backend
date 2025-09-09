import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PushNotificationCampaignWhereUniqueInput } from './push-notification-campaign-where-unique.input';
import { Type } from 'class-transformer';
import { PushNotificationCampaignCreateInput } from './push-notification-campaign-create.input';
import { PushNotificationCampaignUpdateInput } from './push-notification-campaign-update.input';

@ArgsType()
export class UpsertOnePushNotificationCampaignArgs {

    @Field(() => PushNotificationCampaignWhereUniqueInput, {nullable:false})
    @Type(() => PushNotificationCampaignWhereUniqueInput)
    where!: Prisma.AtLeast<PushNotificationCampaignWhereUniqueInput, 'id'>;

    @Field(() => PushNotificationCampaignCreateInput, {nullable:false})
    @Type(() => PushNotificationCampaignCreateInput)
    create!: PushNotificationCampaignCreateInput;

    @Field(() => PushNotificationCampaignUpdateInput, {nullable:false})
    @Type(() => PushNotificationCampaignUpdateInput)
    update!: PushNotificationCampaignUpdateInput;
}
