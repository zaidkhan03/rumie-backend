import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DateRangeOrderByInput } from '../date-range/date-range-order-by.input';
import { EduInstituteSelectOptionOrderByCompositeAggregateInput } from '../edu-institute-select-option/edu-institute-select-option-order-by-composite-aggregate.input';
import { AdvertiserOrderByWithRelationInput } from '../advertiser/advertiser-order-by-with-relation.input';

@InputType()
export class AdOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    visibility?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    image?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;

    @Field(() => DateRangeOrderByInput, {nullable:true})
    validity?: DateRangeOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    advertiserName?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    advertiserId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    monthlyBudget?: `${SortOrder}`;

    @Field(() => EduInstituteSelectOptionOrderByCompositeAggregateInput, {nullable:true})
    selectedEduInstitutes?: EduInstituteSelectOptionOrderByCompositeAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    priority?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    targetGenders?: `${SortOrder}`;

    @Field(() => AdvertiserOrderByWithRelationInput, {nullable:true})
    advertiser?: AdvertiserOrderByWithRelationInput;
}
