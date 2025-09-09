import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryWhereInput } from './story-where.input';
import { Type } from 'class-transformer';
import { StoryOrderByWithRelationInput } from './story-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { StoryWhereUniqueInput } from './story-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StoryCountAggregateInput } from './story-count-aggregate.input';
import { StoryAvgAggregateInput } from './story-avg-aggregate.input';
import { StorySumAggregateInput } from './story-sum-aggregate.input';
import { StoryMinAggregateInput } from './story-min-aggregate.input';
import { StoryMaxAggregateInput } from './story-max-aggregate.input';

@ArgsType()
export class StoryAggregateArgs {

    @Field(() => StoryWhereInput, {nullable:true})
    @Type(() => StoryWhereInput)
    where?: StoryWhereInput;

    @Field(() => [StoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StoryOrderByWithRelationInput>;

    @Field(() => StoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<StoryWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => StoryCountAggregateInput, {nullable:true})
    _count?: StoryCountAggregateInput;

    @Field(() => StoryAvgAggregateInput, {nullable:true})
    _avg?: StoryAvgAggregateInput;

    @Field(() => StorySumAggregateInput, {nullable:true})
    _sum?: StorySumAggregateInput;

    @Field(() => StoryMinAggregateInput, {nullable:true})
    _min?: StoryMinAggregateInput;

    @Field(() => StoryMaxAggregateInput, {nullable:true})
    _max?: StoryMaxAggregateInput;
}
