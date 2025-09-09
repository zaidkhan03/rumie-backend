import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdWhereInput } from './ad-where.input';
import { Type } from 'class-transformer';
import { AdOrderByWithRelationInput } from './ad-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AdWhereUniqueInput } from './ad-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdCountAggregateInput } from './ad-count-aggregate.input';
import { AdAvgAggregateInput } from './ad-avg-aggregate.input';
import { AdSumAggregateInput } from './ad-sum-aggregate.input';
import { AdMinAggregateInput } from './ad-min-aggregate.input';
import { AdMaxAggregateInput } from './ad-max-aggregate.input';

@ArgsType()
export class AdAggregateArgs {

    @Field(() => AdWhereInput, {nullable:true})
    @Type(() => AdWhereInput)
    where?: AdWhereInput;

    @Field(() => [AdOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdOrderByWithRelationInput>;

    @Field(() => AdWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AdWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AdCountAggregateInput, {nullable:true})
    _count?: AdCountAggregateInput;

    @Field(() => AdAvgAggregateInput, {nullable:true})
    _avg?: AdAvgAggregateInput;

    @Field(() => AdSumAggregateInput, {nullable:true})
    _sum?: AdSumAggregateInput;

    @Field(() => AdMinAggregateInput, {nullable:true})
    _min?: AdMinAggregateInput;

    @Field(() => AdMaxAggregateInput, {nullable:true})
    _max?: AdMaxAggregateInput;
}
