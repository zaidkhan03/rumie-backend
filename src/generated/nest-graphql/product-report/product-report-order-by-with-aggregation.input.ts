import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductReportCountOrderByAggregateInput } from './product-report-count-order-by-aggregate.input';
import { ProductReportMaxOrderByAggregateInput } from './product-report-max-order-by-aggregate.input';
import { ProductReportMinOrderByAggregateInput } from './product-report-min-order-by-aggregate.input';

@InputType()
export class ProductReportOrderByWithAggregationInput {

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

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ProductReportCountOrderByAggregateInput, {nullable:true})
    _count?: ProductReportCountOrderByAggregateInput;

    @Field(() => ProductReportMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductReportMaxOrderByAggregateInput;

    @Field(() => ProductReportMinOrderByAggregateInput, {nullable:true})
    _min?: ProductReportMinOrderByAggregateInput;
}
