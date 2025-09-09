import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConversationWhereInput } from './conversation-where.input';
import { Type } from 'class-transformer';
import { ConversationOrderByWithAggregationInput } from './conversation-order-by-with-aggregation.input';
import { ConversationScalarFieldEnum } from './conversation-scalar-field.enum';
import { ConversationScalarWhereWithAggregatesInput } from './conversation-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ConversationCountAggregateInput } from './conversation-count-aggregate.input';
import { ConversationAvgAggregateInput } from './conversation-avg-aggregate.input';
import { ConversationSumAggregateInput } from './conversation-sum-aggregate.input';
import { ConversationMinAggregateInput } from './conversation-min-aggregate.input';
import { ConversationMaxAggregateInput } from './conversation-max-aggregate.input';

@ArgsType()
export class ConversationGroupByArgs {

    @Field(() => ConversationWhereInput, {nullable:true})
    @Type(() => ConversationWhereInput)
    where?: ConversationWhereInput;

    @Field(() => [ConversationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ConversationOrderByWithAggregationInput>;

    @Field(() => [ConversationScalarFieldEnum], {nullable:false})
    by!: Array<`${ConversationScalarFieldEnum}`>;

    @Field(() => ConversationScalarWhereWithAggregatesInput, {nullable:true})
    having?: ConversationScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ConversationCountAggregateInput, {nullable:true})
    _count?: ConversationCountAggregateInput;

    @Field(() => ConversationAvgAggregateInput, {nullable:true})
    _avg?: ConversationAvgAggregateInput;

    @Field(() => ConversationSumAggregateInput, {nullable:true})
    _sum?: ConversationSumAggregateInput;

    @Field(() => ConversationMinAggregateInput, {nullable:true})
    _min?: ConversationMinAggregateInput;

    @Field(() => ConversationMaxAggregateInput, {nullable:true})
    _max?: ConversationMaxAggregateInput;
}
