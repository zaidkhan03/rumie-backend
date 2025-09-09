import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CampusChatMessageCountAggregate } from './campus-chat-message-count-aggregate.output';
import { CampusChatMessageAvgAggregate } from './campus-chat-message-avg-aggregate.output';
import { CampusChatMessageSumAggregate } from './campus-chat-message-sum-aggregate.output';
import { CampusChatMessageMinAggregate } from './campus-chat-message-min-aggregate.output';
import { CampusChatMessageMaxAggregate } from './campus-chat-message-max-aggregate.output';

@ObjectType()
export class AggregateCampusChatMessage {

    @Field(() => CampusChatMessageCountAggregate, {nullable:true})
    _count?: CampusChatMessageCountAggregate;

    @Field(() => CampusChatMessageAvgAggregate, {nullable:true})
    _avg?: CampusChatMessageAvgAggregate;

    @Field(() => CampusChatMessageSumAggregate, {nullable:true})
    _sum?: CampusChatMessageSumAggregate;

    @Field(() => CampusChatMessageMinAggregate, {nullable:true})
    _min?: CampusChatMessageMinAggregate;

    @Field(() => CampusChatMessageMaxAggregate, {nullable:true})
    _max?: CampusChatMessageMaxAggregate;
}
