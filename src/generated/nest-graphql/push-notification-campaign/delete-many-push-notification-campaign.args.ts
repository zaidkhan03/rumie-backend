import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PushNotificationCampaignWhereInput } from './push-notification-campaign-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPushNotificationCampaignArgs {

    @Field(() => PushNotificationCampaignWhereInput, {nullable:true})
    @Type(() => PushNotificationCampaignWhereInput)
    where?: PushNotificationCampaignWhereInput;
}
