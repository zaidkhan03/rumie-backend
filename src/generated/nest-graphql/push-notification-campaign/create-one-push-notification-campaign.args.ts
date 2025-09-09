import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PushNotificationCampaignCreateInput } from './push-notification-campaign-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePushNotificationCampaignArgs {

    @Field(() => PushNotificationCampaignCreateInput, {nullable:false})
    @Type(() => PushNotificationCampaignCreateInput)
    data!: PushNotificationCampaignCreateInput;
}
