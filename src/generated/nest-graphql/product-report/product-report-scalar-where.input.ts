import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumProductReportReasonFilter } from '../prisma/enum-product-report-reason-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProductReportScalarWhereInput {

    @Field(() => [ProductReportScalarWhereInput], {nullable:true})
    AND?: Array<ProductReportScalarWhereInput>;

    @Field(() => [ProductReportScalarWhereInput], {nullable:true})
    OR?: Array<ProductReportScalarWhereInput>;

    @Field(() => [ProductReportScalarWhereInput], {nullable:true})
    NOT?: Array<ProductReportScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    reporterId?: StringFilter;

    @Field(() => EnumProductReportReasonFilter, {nullable:true})
    reason?: EnumProductReportReasonFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    details?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
