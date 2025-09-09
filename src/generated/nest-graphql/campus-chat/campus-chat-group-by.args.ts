import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatWhereInput } from './campus-chat-where.input';
import { Type } from 'class-transformer';
import { CampusChatOrderByWithAggregationInput } from './campus-chat-order-by-with-aggregation.input';
import { CampusChatScalarFieldEnum } from './campus-chat-scalar-field.enum';
import { CampusChatScalarWhereWithAggregatesInput } from './campus-chat-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CampusChatCountAggregateInput } from './campus-chat-count-aggregate.input';
import { CampusChatMinAggregateInput } from './campus-chat-min-aggregate.input';
import { CampusChatMaxAggregateInput } from './campus-chat-max-aggregate.input';

@ArgsType()
export class CampusChatGroupByArgs {

    @Field(() => CampusChatWhereInput, {nullable:true})
    @Type(() => CampusChatWhereInput)
    where?: CampusChatWhereInput;

    @Field(() => [CampusChatOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CampusChatOrderByWithAggregationInput>;

    @Field(() => [CampusChatScalarFieldEnum], {nullable:false})
    by!: Array<`${CampusChatScalarFieldEnum}`>;

    @Field(() => CampusChatScalarWhereWithAggregatesInput, {nullable:true})
    having?: CampusChatScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CampusChatCountAggregateInput, {nullable:true})
    _count?: CampusChatCountAggregateInput;

    @Field(() => CampusChatMinAggregateInput, {nullable:true})
    _min?: CampusChatMinAggregateInput;

    @Field(() => CampusChatMaxAggregateInput, {nullable:true})
    _max?: CampusChatMaxAggregateInput;
}
