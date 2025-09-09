import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EduInstituteSelectOptionOrderByCompositeAggregateInput } from '../edu-institute-select-option/edu-institute-select-option-order-by-composite-aggregate.input';
import { DealBusinessDetailsOrderByInput } from '../deal-business-details/deal-business-details-order-by.input';
import { DealTextContentOrderByInput } from '../deal-text-content/deal-text-content-order-by.input';
import { DateRangeOrderByInput } from '../date-range/date-range-order-by.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';

@InputType()
export class DealOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    image?: `${SortOrder}`;

    @Field(() => EduInstituteSelectOptionOrderByCompositeAggregateInput, {nullable:true})
    selectedEduInstitutes?: EduInstituteSelectOptionOrderByCompositeAggregateInput;

    @Field(() => DealBusinessDetailsOrderByInput, {nullable:true})
    business?: DealBusinessDetailsOrderByInput;

    @Field(() => DealTextContentOrderByInput, {nullable:true})
    content?: DealTextContentOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    couponCode?: `${SortOrder}`;

    @Field(() => DateRangeOrderByInput, {nullable:true})
    validity?: DateRangeOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    savedUserIds?: `${SortOrder}`;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    savedUsers?: UserOrderByRelationAggregateInput;
}
