import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MessageActionsOrderByInput } from '../message-actions/message-actions-order-by.input';

@InputType()
export class MessageOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    clientId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    senderId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    payload?: `${SortOrder}`;

    @Field(() => MessageActionsOrderByInput, {nullable:true})
    actions?: MessageActionsOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    state?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    conversationId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}
