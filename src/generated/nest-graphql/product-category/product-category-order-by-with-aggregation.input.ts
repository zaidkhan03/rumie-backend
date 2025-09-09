import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductCategoryCountOrderByAggregateInput } from './product-category-count-order-by-aggregate.input';
import { ProductCategoryMaxOrderByAggregateInput } from './product-category-max-order-by-aggregate.input';
import { ProductCategoryMinOrderByAggregateInput } from './product-category-min-order-by-aggregate.input';

@InputType()
export class ProductCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    image?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    parentId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    preferredGender?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shippable?: `${SortOrder}`;

    @Field(() => ProductCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: ProductCategoryCountOrderByAggregateInput;

    @Field(() => ProductCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductCategoryMaxOrderByAggregateInput;

    @Field(() => ProductCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: ProductCategoryMinOrderByAggregateInput;
}
