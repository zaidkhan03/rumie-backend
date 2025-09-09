import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumProductReportReasonFilter } from '../prisma/enum-product-report-reason-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ProductReportStatusCompositeFilter } from '../prisma/product-report-status-composite-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductListingRelationFilter } from '../product-listing/product-listing-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class ProductReportWhereInput {

    @Field(() => [ProductReportWhereInput], {nullable:true})
    AND?: Array<ProductReportWhereInput>;

    @Field(() => [ProductReportWhereInput], {nullable:true})
    OR?: Array<ProductReportWhereInput>;

    @Field(() => [ProductReportWhereInput], {nullable:true})
    NOT?: Array<ProductReportWhereInput>;

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

    @Field(() => ProductReportStatusCompositeFilter, {nullable:true})
    status?: ProductReportStatusCompositeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProductListingRelationFilter, {nullable:true})
    product?: ProductListingRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    reporter?: UserRelationFilter;
}
