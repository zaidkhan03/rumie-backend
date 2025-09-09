import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WeightCategoryWhereInput } from './weight-category-where.input';
import { Type } from 'class-transformer';
import { WeightCategoryOrderByWithRelationInput } from './weight-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { WeightCategoryWhereUniqueInput } from './weight-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WeightCategoryCountAggregateInput } from './weight-category-count-aggregate.input';
import { WeightCategoryAvgAggregateInput } from './weight-category-avg-aggregate.input';
import { WeightCategorySumAggregateInput } from './weight-category-sum-aggregate.input';
import { WeightCategoryMinAggregateInput } from './weight-category-min-aggregate.input';
import { WeightCategoryMaxAggregateInput } from './weight-category-max-aggregate.input';

@ArgsType()
export class WeightCategoryAggregateArgs {

    @Field(() => WeightCategoryWhereInput, {nullable:true})
    @Type(() => WeightCategoryWhereInput)
    where?: WeightCategoryWhereInput;

    @Field(() => [WeightCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WeightCategoryOrderByWithRelationInput>;

    @Field(() => WeightCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<WeightCategoryWhereUniqueInput, 'id'>;

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
