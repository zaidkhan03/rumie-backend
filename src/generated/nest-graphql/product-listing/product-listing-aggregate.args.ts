import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductListingWhereInput } from './product-listing-where.input';
import { Type } from 'class-transformer';
import { ProductListingOrderByWithRelationInput } from './product-listing-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductListingCountAggregateInput } from './product-listing-count-aggregate.input';
import { ProductListingAvgAggregateInput } from './product-listing-avg-aggregate.input';
import { ProductListingSumAggregateInput } from './product-listing-sum-aggregate.input';
import { ProductListingMinAggregateInput } from './product-listing-min-aggregate.input';
import { ProductListingMaxAggregateInput } from './product-listing-max-aggregate.input';

@ArgsType()
export class ProductListingAggregateArgs {

    @Field(() => ProductListingWhereInput, {nullable:true})
    @Type(() => ProductListingWhereInput)
    where?: ProductListingWhereInput;

    @Field(() => [ProductListingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductListingOrderByWithRelationInput>;

    @Field(() => ProductListingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>;

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
