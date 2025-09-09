import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HobbyWhereInput } from './hobby-where.input';
import { Type } from 'class-transformer';
import { HobbyOrderByWithAggregationInput } from './hobby-order-by-with-aggregation.input';
import { HobbyScalarFieldEnum } from './hobby-scalar-field.enum';
import { HobbyScalarWhereWithAggregatesInput } from './hobby-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { HobbyCountAggregateInput } from './hobby-count-aggregate.input';
import { HobbyMinAggregateInput } from './hobby-min-aggregate.input';
import { HobbyMaxAggregateInput } from './hobby-max-aggregate.input';

@ArgsType()
export class HobbyGroupByArgs {

    @Field(() => HobbyWhereInput, {nullable:true})
    @Type(() => HobbyWhereInput)
    where?: HobbyWhereInput;

    @Field(() => [HobbyOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HobbyOrderByWithAggregationInput>;

    @Field(() => [HobbyScalarFieldEnum], {nullable:false})
    by!: Array<`${HobbyScalarFieldEnum}`>;

    @Field(() => HobbyScalarWhereWithAggregatesInput, {nullable:true})
    having?: HobbyScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HobbyCountAggregateInput, {nullable:true})
    _count?: HobbyCountAggregateInput;

    @Field(() => HobbyMinAggregateInput, {nullable:true})
    _min?: HobbyMinAggregateInput;

    @Field(() => HobbyMaxAggregateInput, {nullable:true})
    _max?: HobbyMaxAggregateInput;
}
