import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ChatBubblesCountAggregate } from './chat-bubbles-count-aggregate.output';
import { ChatBubblesMinAggregate } from './chat-bubbles-min-aggregate.output';
import { ChatBubblesMaxAggregate } from './chat-bubbles-max-aggregate.output';

@ObjectType()
export class ChatBubblesGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => ChatBubblesCountAggregate, {nullable:true})
    _count?: ChatBubblesCountAggregate;

    @Field(() => ChatBubblesMinAggregate, {nullable:true})
    _min?: ChatBubblesMinAggregate;

    @Field(() => ChatBubblesMaxAggregate, {nullable:true})
    _max?: ChatBubblesMaxAggregate;
}
