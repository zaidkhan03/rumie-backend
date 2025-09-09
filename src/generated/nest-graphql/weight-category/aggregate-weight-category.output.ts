import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WeightCategoryCountAggregate } from './weight-category-count-aggregate.output';
import { WeightCategoryAvgAggregate } from './weight-category-avg-aggregate.output';
import { WeightCategorySumAggregate } from './weight-category-sum-aggregate.output';
import { WeightCategoryMinAggregate } from './weight-category-min-aggregate.output';
import { WeightCategoryMaxAggregate } from './weight-category-max-aggregate.output';

@ObjectType()
export class AggregateWeightCategory {

    @Field(() => WeightCategoryCountAggregate, {nullable:true})
    _count?: WeightCategoryCountAggregate;

    @Field(() => WeightCategoryAvgAggregate, {nullable:true})
    _avg?: WeightCategoryAvgAggregate;

    @Field(() => WeightCategorySumAggregate, {nullable:true})
    _sum?: WeightCategorySumAggregate;

    @Field(() => WeightCategoryMinAggregate, {nullable:true})
    _min?: WeightCategoryMinAggregate;

    @Field(() => WeightCategoryMaxAggregate, {nullable:true})
    _max?: WeightCategoryMaxAggregate;
}
