import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatMessagePayloadWhereInput } from './campus-chat-message-payload-where.input';
import { Type } from 'class-transformer';
import { CampusChatMessagePayloadOrderByWithAggregationInput } from './campus-chat-message-payload-order-by-with-aggregation.input';
import { CampusChatMessagePayloadScalarFieldEnum } from './campus-chat-message-payload-scalar-field.enum';
import { CampusChatMessagePayloadScalarWhereWithAggregatesInput } from './campus-chat-message-payload-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CampusChatMessagePayloadCountAggregateInput } from './campus-chat-message-payload-count-aggregate.input';
import { CampusChatMessagePayloadMinAggregateInput } from './campus-chat-message-payload-min-aggregate.input';
import { CampusChatMessagePayloadMaxAggregateInput } from './campus-chat-message-payload-max-aggregate.input';

@ArgsType()
export class CampusChatMessagePayloadGroupByArgs {

    @Field(() => CampusChatMessagePayloadWhereInput, {nullable:true})
    @Type(() => CampusChatMessagePayloadWhereInput)
    where?: CampusChatMessagePayloadWhereInput;

    @Field(() => [CampusChatMessagePayloadOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CampusChatMessagePayloadOrderByWithAggregationInput>;

    @Field(() => [CampusChatMessagePayloadScalarFieldEnum], {nullable:false})
    by!: Array<`${CampusChatMessagePayloadScalarFieldEnum}`>;

    @Field(() => CampusChatMessagePayloadScalarWhereWithAggregatesInput, {nullable:true})
    having?: CampusChatMessagePayloadScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CampusChatMessagePayloadCountAggregateInput, {nullable:true})
    _count?: CampusChatMessagePayloadCountAggregateInput;

    @Field(() => CampusChatMessagePayloadMinAggregateInput, {nullable:true})
    _min?: CampusChatMessagePayloadMinAggregateInput;

    @Field(() => CampusChatMessagePayloadMaxAggregateInput, {nullable:true})
    _max?: CampusChatMessagePayloadMaxAggregateInput;
}
