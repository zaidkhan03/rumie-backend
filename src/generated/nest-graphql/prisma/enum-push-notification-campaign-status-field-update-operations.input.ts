import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PushNotificationCampaignStatus } from './push-notification-campaign-status.enum';

@InputType()
export class EnumPushNotificationCampaignStatusFieldUpdateOperationsInput {

    @Field(() => PushNotificationCampaignStatus, {nullable:true})
    set?: `${PushNotificationCampaignStatus}`;
}
