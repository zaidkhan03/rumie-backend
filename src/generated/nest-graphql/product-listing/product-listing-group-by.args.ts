import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductListingWhereInput } from './product-listing-where.input';
import { Type } from 'class-transformer';
import { ProductListingOrderByWithAggregationInput } from './product-listing-order-by-with-aggregation.input';
import { ProductListingScalarFieldEnum } from './product-listing-scalar-field.enum';
import { ProductListingScalarWhereWithAggregatesInput } from './product-listing-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductListingCountAggregateInput } from './product-listing-count-aggregate.input';
import { ProductListingAvgAggregateInput } from './product-listing-avg-aggregate.input';
import { ProductListingSumAggregateInput } from './product-listing-sum-aggregate.input';
import { ProductListingMinAggregateInput } from './product-listing-min-aggregate.input';
import { ProductListingMaxAggregateInput } from './product-listing-max-aggregate.input';

@ArgsType()
export class ProductListingGroupByArgs {

    @Field(() => ProductListingWhereInput, {nullable:true})
    @Type(() => ProductListingWhereInput)
    where?: ProductListingWhereInput;

    @Field(() => [ProductListingOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductListingOrderByWithAggregationInput>;

    @Field(() => [ProductListingScalarFieldEnum], {nullable:false})
    by!: Array<`${ProductListingScalarFieldEnum}`>;

    @Field(() => ProductListingScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProductListingScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductListingCountAggregateInput, {nullable:true})
    _count?: ProductListingCountAggregateInput;

    @Field(() => ProductListingAvgAggregateInput, {nullable:true})
    _avg?: ProductListingAvgAggregateInput;

    @Field(() => ProductListingSumAggregateInput, {nullable:true})
    _sum?: ProductListingSumAggregateInput;

    @Field(() => ProductListingMinAggregateInput, {nullable:true})
    _min?: ProductListingMinAggregateInput;

    @Field(() => ProductListingMaxAggregateInput, {nullable:true})
    _max?: ProductListingMaxAggregateInput;
}
