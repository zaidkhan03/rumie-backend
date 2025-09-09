import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { WeightCategoryCountAggregate } from './weight-category-count-aggregate.output';
import { WeightCategoryAvgAggregate } from './weight-category-avg-aggregate.output';
import { WeightCategorySumAggregate } from './weight-category-sum-aggregate.output';
import { WeightCategoryMinAggregate } from './weight-category-min-aggregate.output';
import { WeightCategoryMaxAggregate } from './weight-category-max-aggregate.output';

@ObjectType()
export class WeightCategoryGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    alias!: string;

    @Field(() => Float, {nullable:false})
    shippingFee!: number;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
