import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { MessageType } from '../prisma/message-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { MessageActions } from '../message-actions/message-actions.model';
import { MessageState } from '../prisma/message-state.enum';

@ObjectType()
export class Message {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    clientId!: string;

    @Field(() => String, {nullable:false})
    senderId!: string;

    @Field(() => MessageType, {nullable:false})
    type!: `${MessageType}`;

    @Field(() => GraphQLJSON, {nullable:false})
    payload!: any;

    @Field(() => MessageActions, {nullable:true})
    actions?: MessageActions | null;

    @Field(() => MessageState, {nullable:true})
    state!: `${MessageState}` | null;

    @Field(() => String, {nullable:false})
    conversationId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
