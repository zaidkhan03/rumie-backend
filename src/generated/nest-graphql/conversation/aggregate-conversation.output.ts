import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ConversationCountAggregate } from './conversation-count-aggregate.output';
import { ConversationAvgAggregate } from './conversation-avg-aggregate.output';
import { ConversationSumAggregate } from './conversation-sum-aggregate.output';
import { ConversationMinAggregate } from './conversation-min-aggregate.output';
import { ConversationMaxAggregate } from './conversation-max-aggregate.output';

@ObjectType()
export class AggregateConversation {

    @Field(() => ConversationCountAggregate, {nullable:true})
    _count?: ConversationCountAggregate;

    @Field(() => ConversationAvgAggregate, {nullable:true})
    _avg?: ConversationAvgAggregate;

    @Field(() => ConversationSumAggregate, {nullable:true})
    _sum?: ConversationSumAggregate;

    @Field(() => ConversationMinAggregate, {nullable:true})
    _min?: ConversationMinAggregate;

    @Field(() => ConversationMaxAggregate, {nullable:true})
    _max?: ConversationMaxAggregate;
}
