import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PushNotificationCampaignCountOrderByAggregateInput } from './push-notification-campaign-count-order-by-aggregate.input';
import { PushNotificationCampaignMaxOrderByAggregateInput } from './push-notification-campaign-max-order-by-aggregate.input';
import { PushNotificationCampaignMinOrderByAggregateInput } from './push-notification-campaign-min-order-by-aggregate.input';

@InputType()
export class PushNotificationCampaignOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    senderListType?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => PushNotificationCampaignCountOrderByAggregateInput, {nullable:true})
    _count?: PushNotificationCampaignCountOrderByAggregateInput;

    @Field(() => PushNotificationCampaignMaxOrderByAggregateInput, {nullable:true})
    _max?: PushNotificationCampaignMaxOrderByAggregateInput;

    @Field(() => PushNotificationCampaignMinOrderByAggregateInput, {nullable:true})
    _min?: PushNotificationCampaignMinOrderByAggregateInput;
}
