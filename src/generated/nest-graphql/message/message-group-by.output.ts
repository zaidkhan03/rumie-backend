import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MessageType } from '../prisma/message-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { MessageState } from '../prisma/message-state.enum';
import { MessageCountAggregate } from './message-count-aggregate.output';
import { MessageMinAggregate } from './message-min-aggregate.output';
import { MessageMaxAggregate } from './message-max-aggregate.output';

@ObjectType()
export class MessageGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    clientId!: string;

    @Field(() => String, {nullable:false})
    senderId!: string;

    @Field(() => MessageType, {nullable:false})
    type!: `${MessageType}`;

    @Field(() => GraphQLJSON, {nullable:false})
    payload!: any;

    @Field(() => MessageState, {nullable:true})
    state?: `${MessageState}`;

    @Field(() => String, {nullable:false})
    conversationId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => MessageCountAggregate, {nullable:true})
    _count?: MessageCountAggregate;

    @Field(() => MessageMinAggregate, {nullable:true})
    _min?: MessageMinAggregate;

    @Field(() => MessageMaxAggregate, {nullable:true})
    _max?: MessageMaxAggregate;
}
