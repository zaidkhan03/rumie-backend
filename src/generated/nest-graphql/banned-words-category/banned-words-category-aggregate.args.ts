import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannedWordsCategoryWhereInput } from './banned-words-category-where.input';
import { Type } from 'class-transformer';
import { BannedWordsCategoryOrderByWithRelationInput } from './banned-words-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BannedWordsCategoryWhereUniqueInput } from './banned-words-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BannedWordsCategoryCountAggregateInput } from './banned-words-category-count-aggregate.input';
import { BannedWordsCategoryAvgAggregateInput } from './banned-words-category-avg-aggregate.input';
import { BannedWordsCategorySumAggregateInput } from './banned-words-category-sum-aggregate.input';
import { BannedWordsCategoryMinAggregateInput } from './banned-words-category-min-aggregate.input';
import { BannedWordsCategoryMaxAggregateInput } from './banned-words-category-max-aggregate.input';

@ArgsType()
export class BannedWordsCategoryAggregateArgs {

    @Field(() => BannedWordsCategoryWhereInput, {nullable:true})
    @Type(() => BannedWordsCategoryWhereInput)
    where?: BannedWordsCategoryWhereInput;

    @Field(() => [BannedWordsCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BannedWordsCategoryOrderByWithRelationInput>;

    @Field(() => BannedWordsCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BannedWordsCategoryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BannedWordsCategoryCountAggregateInput, {nullable:true})
    _count?: BannedWordsCategoryCountAggregateInput;

    @Field(() => BannedWordsCategoryAvgAggregateInput, {nullable:true})
    _avg?: BannedWordsCategoryAvgAggregateInput;

    @Field(() => BannedWordsCategorySumAggregateInput, {nullable:true})
    _sum?: BannedWordsCategorySumAggregateInput;

    @Field(() => BannedWordsCategoryMinAggregateInput, {nullable:true})
    _min?: BannedWordsCategoryMinAggregateInput;

    @Field(() => BannedWordsCategoryMaxAggregateInput, {nullable:true})
    _max?: BannedWordsCategoryMaxAggregateInput;
}
