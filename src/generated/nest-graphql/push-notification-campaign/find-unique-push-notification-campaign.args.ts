import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PushNotificationCampaignWhereUniqueInput } from './push-notification-campaign-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePushNotificationCampaignArgs {

    @Field(() => PushNotificationCampaignWhereUniqueInput, {nullable:false})
    @Type(() => PushNotificationCampaignWhereUniqueInput)
    where!: Prisma.AtLeast<PushNotificationCampaignWhereUniqueInput, 'id'>;
}
