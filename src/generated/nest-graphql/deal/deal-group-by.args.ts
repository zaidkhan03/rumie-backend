import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DealWhereInput } from './deal-where.input';
import { Type } from 'class-transformer';
import { DealOrderByWithAggregationInput } from './deal-order-by-with-aggregation.input';
import { DealScalarFieldEnum } from './deal-scalar-field.enum';
import { DealScalarWhereWithAggregatesInput } from './deal-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DealCountAggregateInput } from './deal-count-aggregate.input';
import { DealMinAggregateInput } from './deal-min-aggregate.input';
import { DealMaxAggregateInput } from './deal-max-aggregate.input';

@ArgsType()
export class DealGroupByArgs {

    @Field(() => DealWhereInput, {nullable:true})
    @Type(() => DealWhereInput)
    where?: DealWhereInput;

    @Field(() => [DealOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DealOrderByWithAggregationInput>;

    @Field(() => [DealScalarFieldEnum], {nullable:false})
    by!: Array<`${DealScalarFieldEnum}`>;

    @Field(() => DealScalarWhereWithAggregatesInput, {nullable:true})
    having?: DealScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DealCountAggregateInput, {nullable:true})
    _count?: DealCountAggregateInput;

    @Field(() => DealMinAggregateInput, {nullable:true})
    _min?: DealMinAggregateInput;

    @Field(() => DealMaxAggregateInput, {nullable:true})
    _max?: DealMaxAggregateInput;
}
