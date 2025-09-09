import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CampusChatCountAggregate } from './campus-chat-count-aggregate.output';
import { CampusChatMinAggregate } from './campus-chat-min-aggregate.output';
import { CampusChatMaxAggregate } from './campus-chat-max-aggregate.output';

@ObjectType()
export class AggregateCampusChat {

    @Field(() => CampusChatCountAggregate, {nullable:true})
    _count?: CampusChatCountAggregate;

    @Field(() => CampusChatMinAggregate, {nullable:true})
    _min?: CampusChatMinAggregate;

    @Field(() => CampusChatMaxAggregate, {nullable:true})
    _max?: CampusChatMaxAggregate;
}
