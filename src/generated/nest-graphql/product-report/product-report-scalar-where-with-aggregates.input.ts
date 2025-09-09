import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumProductReportReasonWithAggregatesFilter } from '../prisma/enum-product-report-reason-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ProductReportScalarWhereWithAggregatesInput {

    @Field(() => [ProductReportScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductReportScalarWhereWithAggregatesInput>;

    @Field(() => [ProductReportScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductReportScalarWhereWithAggregatesInput>;

    @Field(() => [ProductReportScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductReportScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    productId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    reporterId?: StringWithAggregatesFilter;

    @Field(() => EnumProductReportReasonWithAggregatesFilter, {nullable:true})
    reason?: EnumProductReportReasonWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    details?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
