import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PushNotificationCampaignWhereInput } from './push-notification-campaign-where.input';
import { Type } from 'class-transformer';
import { PushNotificationCampaignOrderByWithRelationInput } from './push-notification-campaign-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PushNotificationCampaignWhereUniqueInput } from './push-notification-campaign-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PushNotificationCampaignScalarFieldEnum } from './push-notification-campaign-scalar-field.enum';

@ArgsType()
export class FindFirstPushNotificationCampaignArgs {

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

    @Field(() => [PushNotificationCampaignScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PushNotificationCampaignScalarFieldEnum}`>;
}
