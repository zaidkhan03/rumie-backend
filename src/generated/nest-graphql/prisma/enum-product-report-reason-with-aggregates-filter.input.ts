import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductReportReason } from './product-report-reason.enum';
import { NestedEnumProductReportReasonWithAggregatesFilter } from './nested-enum-product-report-reason-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumProductReportReasonFilter } from './nested-enum-product-report-reason-filter.input';

@InputType()
export class EnumProductReportReasonWithAggregatesFilter {

    @Field(() => ProductReportReason, {nullable:true})
    equals?: `${ProductReportReason}`;

    @Field(() => [ProductReportReason], {nullable:true})
    in?: Array<`${ProductReportReason}`>;

    @Field(() => [ProductReportReason], {nullable:true})
    notIn?: Array<`${ProductReportReason}`>;

    @Field(() => NestedEnumProductReportReasonWithAggregatesFilter, {nullable:true})
    not?: NestedEnumProductReportReasonWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumProductReportReasonFilter, {nullable:true})
    _min?: NestedEnumProductReportReasonFilter;

    @Field(() => NestedEnumProductReportReasonFilter, {nullable:true})
    _max?: NestedEnumProductReportReasonFilter;
}
