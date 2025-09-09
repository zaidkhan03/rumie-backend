import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageType } from '../prisma/message-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { MessageActionsNullableCreateEnvelopeInput } from '../prisma/message-actions-nullable-create-envelope.input';
import { MessageState } from '../prisma/message-state.enum';

@InputType()
export class MessageCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    clientId!: string;

    @Field(() => String, {nullable:false})
    senderId!: string;

    @Field(() => MessageType, {nullable:false})
    type!: `${MessageType}`;

    @Field(() => GraphQLJSON, {nullable:false})
    payload!: any;

    @Field(() => MessageActionsNullableCreateEnvelopeInput, {nullable:true})
    actions?: MessageActionsNullableCreateEnvelopeInput;

    @Field(() => MessageState, {nullable:true})
    state?: `${MessageState}`;

    @Field(() => String, {nullable:false})
    conversationId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
