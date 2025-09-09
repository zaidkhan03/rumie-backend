import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PushNotificationCampaignCreateManyInput } from './push-notification-campaign-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPushNotificationCampaignArgs {

    @Field(() => [PushNotificationCampaignCreateManyInput], {nullable:false})
    @Type(() => PushNotificationCampaignCreateManyInput)
    data!: Array<PushNotificationCampaignCreateManyInput>;
}
