import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCategoryWhereInput } from './product-category-where.input';
import { Type } from 'class-transformer';
import { ProductCategoryOrderByWithAggregationInput } from './product-category-order-by-with-aggregation.input';
import { ProductCategoryScalarFieldEnum } from './product-category-scalar-field.enum';
import { ProductCategoryScalarWhereWithAggregatesInput } from './product-category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductCategoryCountAggregateInput } from './product-category-count-aggregate.input';
import { ProductCategoryMinAggregateInput } from './product-category-min-aggregate.input';
import { ProductCategoryMaxAggregateInput } from './product-category-max-aggregate.input';

@ArgsType()
export class ProductCategoryGroupByArgs {

    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    where?: ProductCategoryWhereInput;

    @Field(() => [ProductCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductCategoryOrderByWithAggregationInput>;

    @Field(() => [ProductCategoryScalarFieldEnum], {nullable:false})
    by!: Array<`${ProductCategoryScalarFieldEnum}`>;

    @Field(() => ProductCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProductCategoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductCategoryCountAggregateInput, {nullable:true})
    _count?: ProductCategoryCountAggregateInput;

    @Field(() => ProductCategoryMinAggregateInput, {nullable:true})
    _min?: ProductCategoryMinAggregateInput;

    @Field(() => ProductCategoryMaxAggregateInput, {nullable:true})
    _max?: ProductCategoryMaxAggregateInput;
}
