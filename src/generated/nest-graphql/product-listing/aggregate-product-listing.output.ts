import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductListingCountAggregate } from './product-listing-count-aggregate.output';
import { ProductListingAvgAggregate } from './product-listing-avg-aggregate.output';
import { ProductListingSumAggregate } from './product-listing-sum-aggregate.output';
import { ProductListingMinAggregate } from './product-listing-min-aggregate.output';
import { ProductListingMaxAggregate } from './product-listing-max-aggregate.output';

@ObjectType()
export class AggregateProductListing {

    @Field(() => ProductListingCountAggregate, {nullable:true})
    _count?: ProductListingCountAggregate;

    @Field(() => ProductListingAvgAggregate, {nullable:true})
    _avg?: ProductListingAvgAggregate;

    @Field(() => ProductListingSumAggregate, {nullable:true})
    _sum?: ProductListingSumAggregate;

    @Field(() => ProductListingMinAggregate, {nullable:true})
    _min?: ProductListingMinAggregate;

    @Field(() => ProductListingMaxAggregate, {nullable:true})
    _max?: ProductListingMaxAggregate;
}
