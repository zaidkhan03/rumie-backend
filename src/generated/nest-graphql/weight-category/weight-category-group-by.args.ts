import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WeightCategoryWhereInput } from './weight-category-where.input';
import { Type } from 'class-transformer';
import { WeightCategoryOrderByWithAggregationInput } from './weight-category-order-by-with-aggregation.input';
import { WeightCategoryScalarFieldEnum } from './weight-category-scalar-field.enum';
import { WeightCategoryScalarWhereWithAggregatesInput } from './weight-category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { WeightCategoryCountAggregateInput } from './weight-category-count-aggregate.input';
import { WeightCategoryAvgAggregateInput } from './weight-category-avg-aggregate.input';
import { WeightCategorySumAggregateInput } from './weight-category-sum-aggregate.input';
import { WeightCategoryMinAggregateInput } from './weight-category-min-aggregate.input';
import { WeightCategoryMaxAggregateInput } from './weight-category-max-aggregate.input';

@ArgsType()
export class WeightCategoryGroupByArgs {

    @Field(() => WeightCategoryWhereInput, {nullable:true})
    @Type(() => WeightCategoryWhereInput)
    where?: WeightCategoryWhereInput;

    @Field(() => [WeightCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<WeightCategoryOrderByWithAggregationInput>;

    @Field(() => [WeightCategoryScalarFieldEnum], {nullable:false})
    by!: Array<`${WeightCategoryScalarFieldEnum}`>;

    @Field(() => WeightCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: WeightCategoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => WeightCategoryCountAggregateInput, {nullable:true})
    _count?: WeightCategoryCountAggregateInput;

    @Field(() => WeightCategoryAvgAggregateInput, {nullable:true})
    _avg?: WeightCategoryAvgAggregateInput;

    @Field(() => WeightCategorySumAggregateInput, {nullable:true})
    _sum?: WeightCategorySumAggregateInput;

    @Field(() => WeightCategoryMinAggregateInput, {nullable:true})
    _min?: WeightCategoryMinAggregateInput;

    @Field(() => WeightCategoryMaxAggregateInput, {nullable:true})
    _max?: WeightCategoryMaxAggregateInput;
}
