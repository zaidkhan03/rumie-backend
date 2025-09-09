import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannedWordWhereInput } from './banned-word-where.input';
import { Type } from 'class-transformer';
import { BannedWordOrderByWithAggregationInput } from './banned-word-order-by-with-aggregation.input';
import { BannedWordScalarFieldEnum } from './banned-word-scalar-field.enum';
import { BannedWordScalarWhereWithAggregatesInput } from './banned-word-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BannedWordCountAggregateInput } from './banned-word-count-aggregate.input';
import { BannedWordMinAggregateInput } from './banned-word-min-aggregate.input';
import { BannedWordMaxAggregateInput } from './banned-word-max-aggregate.input';

@ArgsType()
export class BannedWordGroupByArgs {

    @Field(() => BannedWordWhereInput, {nullable:true})
    @Type(() => BannedWordWhereInput)
    where?: BannedWordWhereInput;

    @Field(() => [BannedWordOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BannedWordOrderByWithAggregationInput>;

    @Field(() => [BannedWordScalarFieldEnum], {nullable:false})
    by!: Array<`${BannedWordScalarFieldEnum}`>;

    @Field(() => BannedWordScalarWhereWithAggregatesInput, {nullable:true})
    having?: BannedWordScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BannedWordCountAggregateInput, {nullable:true})
    _count?: BannedWordCountAggregateInput;

    @Field(() => BannedWordMinAggregateInput, {nullable:true})
    _min?: BannedWordMinAggregateInput;

    @Field(() => BannedWordMaxAggregateInput, {nullable:true})
    _max?: BannedWordMaxAggregateInput;
}
