import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PushNotificationCampaignUpdateInput } from './push-notification-campaign-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PushNotificationCampaignWhereUniqueInput } from './push-notification-campaign-where-unique.input';

@ArgsType()
export class UpdateOnePushNotificationCampaignArgs {

    @Field(() => PushNotificationCampaignUpdateInput, {nullable:false})
    @Type(() => PushNotificationCampaignUpdateInput)
    data!: PushNotificationCampaignUpdateInput;

    @Field(() => PushNotificationCampaignWhereUniqueInput, {nullable:false})
    @Type(() => PushNotificationCampaignWhereUniqueInput)
    where!: Prisma.AtLeast<PushNotificationCampaignWhereUniqueInput, 'id'>;
}
