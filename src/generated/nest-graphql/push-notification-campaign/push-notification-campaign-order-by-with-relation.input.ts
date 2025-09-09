import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PushNotificationDataOrderByInput } from '../push-notification-data/push-notification-data-order-by.input';
import { EduInstituteSelectOptionOrderByCompositeAggregateInput } from '../edu-institute-select-option/edu-institute-select-option-order-by-composite-aggregate.input';
import { PushNotificationCampaignFiltersOrderByInput } from '../push-notification-campaign-filters/push-notification-campaign-filters-order-by.input';

@InputType()
export class PushNotificationCampaignOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => PushNotificationDataOrderByInput, {nullable:true})
    notification?: PushNotificationDataOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    senderListType?: `${SortOrder}`;

    @Field(() => EduInstituteSelectOptionOrderByCompositeAggregateInput, {nullable:true})
    selectedEduInstitutes?: EduInstituteSelectOptionOrderByCompositeAggregateInput;

    @Field(() => PushNotificationCampaignFiltersOrderByInput, {nullable:true})
    filters?: PushNotificationCampaignFiltersOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}
