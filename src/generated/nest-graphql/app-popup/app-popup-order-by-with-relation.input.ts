import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EduInstituteSelectOptionOrderByCompositeAggregateInput } from '../edu-institute-select-option/edu-institute-select-option-order-by-composite-aggregate.input';
import { AppPopupFiltersOrderByInput } from '../app-popup-filters/app-popup-filters-order-by.input';
import { DateRangeOrderByInput } from '../date-range/date-range-order-by.input';

@InputType()
export class AppPopupOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    frequency?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    selectionListType?: `${SortOrder}`;

    @Field(() => EduInstituteSelectOptionOrderByCompositeAggregateInput, {nullable:true})
    selectedEduInstitutes?: EduInstituteSelectOptionOrderByCompositeAggregateInput;

    @Field(() => AppPopupFiltersOrderByInput, {nullable:true})
    filters?: AppPopupFiltersOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    template?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    image?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    ctaUrl?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    ctaText?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    couponCode?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    delayInSeconds?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => DateRangeOrderByInput, {nullable:true})
    validity?: DateRangeOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}
