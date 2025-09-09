import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MessageType } from '../prisma/message-type.enum';
import { MessageState } from '../prisma/message-state.enum';

@ObjectType()
export class MessageMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    clientId?: string;

    @Field(() => String, {nullable:true})
    senderId?: string;

    @Field(() => MessageType, {nullable:true})
    type?: `${MessageType}`;

    @Field(() => MessageState, {nullable:true})
    state?: `${MessageState}`;

    @Field(() => String, {nullable:true})
    conversationId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
