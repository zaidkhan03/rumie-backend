import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CampusChatMessagePayloadCountAggregate } from './campus-chat-message-payload-count-aggregate.output';
import { CampusChatMessagePayloadMinAggregate } from './campus-chat-message-payload-min-aggregate.output';
import { CampusChatMessagePayloadMaxAggregate } from './campus-chat-message-payload-max-aggregate.output';

@ObjectType()
export class CampusChatMessagePayloadGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => CampusChatMessagePayloadCountAggregate, {nullable:true})
    _count?: CampusChatMessagePayloadCountAggregate;

    @Field(() => CampusChatMessagePayloadMinAggregate, {nullable:true})
    _min?: CampusChatMessagePayloadMinAggregate;

    @Field(() => CampusChatMessagePayloadMaxAggregate, {nullable:true})
    _max?: CampusChatMessagePayloadMaxAggregate;
}
