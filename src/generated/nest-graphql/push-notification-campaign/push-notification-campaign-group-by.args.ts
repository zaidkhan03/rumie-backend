import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PushNotificationCampaignWhereInput } from './push-notification-campaign-where.input';
import { Type } from 'class-transformer';
import { PushNotificationCampaignOrderByWithAggregationInput } from './push-notification-campaign-order-by-with-aggregation.input';
import { PushNotificationCampaignScalarFieldEnum } from './push-notification-campaign-scalar-field.enum';
import { PushNotificationCampaignScalarWhereWithAggregatesInput } from './push-notification-campaign-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PushNotificationCampaignCountAggregateInput } from './push-notification-campaign-count-aggregate.input';
import { PushNotificationCampaignMinAggregateInput } from './push-notification-campaign-min-aggregate.input';
import { PushNotificationCampaignMaxAggregateInput } from './push-notification-campaign-max-aggregate.input';

@ArgsType()
export class PushNotificationCampaignGroupByArgs {

    @Field(() => PushNotificationCampaignWhereInput, {nullable:true})
    @Type(() => PushNotificationCampaignWhereInput)
    where?: PushNotificationCampaignWhereInput;

    @Field(() => [PushNotificationCampaignOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PushNotificationCampaignOrderByWithAggregationInput>;

    @Field(() => [PushNotificationCampaignScalarFieldEnum], {nullable:false})
    by!: Array<`${PushNotificationCampaignScalarFieldEnum}`>;

    @Field(() => PushNotificationCampaignScalarWhereWithAggregatesInput, {nullable:true})
    having?: PushNotificationCampaignScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PushNotificationCampaignCountAggregateInput, {nullable:true})
    _count?: PushNotificationCampaignCountAggregateInput;

    @Field(() => PushNotificationCampaignMinAggregateInput, {nullable:true})
    _min?: PushNotificationCampaignMinAggregateInput;

    @Field(() => PushNotificationCampaignMaxAggregateInput, {nullable:true})
    _max?: PushNotificationCampaignMaxAggregateInput;
}
