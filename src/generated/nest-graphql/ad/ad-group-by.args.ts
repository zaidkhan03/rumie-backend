import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdWhereInput } from './ad-where.input';
import { Type } from 'class-transformer';
import { AdOrderByWithAggregationInput } from './ad-order-by-with-aggregation.input';
import { AdScalarFieldEnum } from './ad-scalar-field.enum';
import { AdScalarWhereWithAggregatesInput } from './ad-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AdCountAggregateInput } from './ad-count-aggregate.input';
import { AdAvgAggregateInput } from './ad-avg-aggregate.input';
import { AdSumAggregateInput } from './ad-sum-aggregate.input';
import { AdMinAggregateInput } from './ad-min-aggregate.input';
import { AdMaxAggregateInput } from './ad-max-aggregate.input';

@ArgsType()
export class AdGroupByArgs {

    @Field(() => AdWhereInput, {nullable:true})
    @Type(() => AdWhereInput)
    where?: AdWhereInput;

    @Field(() => [AdOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AdOrderByWithAggregationInput>;

    @Field(() => [AdScalarFieldEnum], {nullable:false})
    by!: Array<`${AdScalarFieldEnum}`>;

    @Field(() => AdScalarWhereWithAggregatesInput, {nullable:true})
    having?: AdScalarWhereWithAggregatesInput;

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
