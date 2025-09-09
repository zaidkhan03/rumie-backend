import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumProductReportActionNullableFilter } from '../prisma/enum-product-report-action-nullable-filter.input';

@InputType()
export class ProductReportStatusWhereInput {

    @Field(() => [ProductReportStatusWhereInput], {nullable:true})
    AND?: Array<ProductReportStatusWhereInput>;

    @Field(() => [ProductReportStatusWhereInput], {nullable:true})
    OR?: Array<ProductReportStatusWhereInput>;

    @Field(() => [ProductReportStatusWhereInput], {nullable:true})
    NOT?: Array<ProductReportStatusWhereInput>;

    @Field(() => BoolFilter, {nullable:true})
    reviewed?: BoolFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    reviewedAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    reviewedBy?: StringNullableFilter;

    @Field(() => EnumProductReportActionNullableFilter, {nullable:true})
    action?: EnumProductReportActionNullableFilter;
}
