import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductReportStatusOrderByInput } from '../product-report-status/product-report-status-order-by.input';
import { ProductListingOrderByWithRelationInput } from '../product-listing/product-listing-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class ProductReportOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    reporterId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    reason?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    details?: `${SortOrder}`;

    @Field(() => ProductReportStatusOrderByInput, {nullable:true})
    status?: ProductReportStatusOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ProductListingOrderByWithRelationInput, {nullable:true})
    product?: ProductListingOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    reporter?: UserOrderByWithRelationInput;
}
