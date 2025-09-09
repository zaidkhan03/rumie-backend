import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShoppingPreferenceWhereInput } from './shopping-preference-where.input';
import { Type } from 'class-transformer';
import { ShoppingPreferenceOrderByWithAggregationInput } from './shopping-preference-order-by-with-aggregation.input';
import { ShoppingPreferenceScalarFieldEnum } from './shopping-preference-scalar-field.enum';
import { ShoppingPreferenceScalarWhereWithAggregatesInput } from './shopping-preference-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ShoppingPreferenceCountAggregateInput } from './shopping-preference-count-aggregate.input';
import { ShoppingPreferenceMinAggregateInput } from './shopping-preference-min-aggregate.input';
import { ShoppingPreferenceMaxAggregateInput } from './shopping-preference-max-aggregate.input';

@ArgsType()
export class ShoppingPreferenceGroupByArgs {

    @Field(() => ShoppingPreferenceWhereInput, {nullable:true})
    @Type(() => ShoppingPreferenceWhereInput)
    where?: ShoppingPreferenceWhereInput;

    @Field(() => [ShoppingPreferenceOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ShoppingPreferenceOrderByWithAggregationInput>;

    @Field(() => [ShoppingPreferenceScalarFieldEnum], {nullable:false})
    by!: Array<`${ShoppingPreferenceScalarFieldEnum}`>;

    @Field(() => ShoppingPreferenceScalarWhereWithAggregatesInput, {nullable:true})
    having?: ShoppingPreferenceScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ShoppingPreferenceCountAggregateInput, {nullable:true})
    _count?: ShoppingPreferenceCountAggregateInput;

    @Field(() => ShoppingPreferenceMinAggregateInput, {nullable:true})
    _min?: ShoppingPreferenceMinAggregateInput;

    @Field(() => ShoppingPreferenceMaxAggregateInput, {nullable:true})
    _max?: ShoppingPreferenceMaxAggregateInput;
}
