import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PushNotificationCampaignUpdateManyMutationInput } from './push-notification-campaign-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PushNotificationCampaignWhereInput } from './push-notification-campaign-where.input';

@ArgsType()
export class UpdateManyPushNotificationCampaignArgs {

    @Field(() => PushNotificationCampaignUpdateManyMutationInput, {nullable:false})
    @Type(() => PushNotificationCampaignUpdateManyMutationInput)
    data!: PushNotificationCampaignUpdateManyMutationInput;

    @Field(() => PushNotificationCampaignWhereInput, {nullable:true})
    @Type(() => PushNotificationCampaignWhereInput)
    where?: PushNotificationCampaignWhereInput;
}
