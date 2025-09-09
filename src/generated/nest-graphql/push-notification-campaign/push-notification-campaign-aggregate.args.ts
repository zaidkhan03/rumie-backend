import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PushNotificationCampaignWhereInput } from './push-notification-campaign-where.input';
import { Type } from 'class-transformer';
import { PushNotificationCampaignOrderByWithRelationInput } from './push-notification-campaign-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PushNotificationCampaignWhereUniqueInput } from './push-notification-campaign-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PushNotificationCampaignCountAggregateInput } from './push-notification-campaign-count-aggregate.input';
import { PushNotificationCampaignMinAggregateInput } from './push-notification-campaign-min-aggregate.input';
import { PushNotificationCampaignMaxAggregateInput } from './push-notification-campaign-max-aggregate.input';

@ArgsType()
export class PushNotificationCampaignAggregateArgs {

    @Field(() => PushNotificationCampaignWhereInput, {nullable:true})
    @Type(() => PushNotificationCampaignWhereInput)
    where?: PushNotificationCampaignWhereInput;

    @Field(() => [PushNotificationCampaignOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PushNotificationCampaignOrderByWithRelationInput>;

    @Field(() => PushNotificationCampaignWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PushNotificationCampaignWhereUniqueInput, 'id'>;

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
