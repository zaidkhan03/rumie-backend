import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageActionOrderByCompositeAggregateInput } from '../message-action/message-action-order-by-composite-aggregate.input';

@InputType()
export class MessageActionsOrderByInput {

    @Field(() => MessageActionOrderByCompositeAggregateInput, {nullable:true})
    senderActions?: MessageActionOrderByCompositeAggregateInput;

    @Field(() => MessageActionOrderByCompositeAggregateInput, {nullable:true})
    receiverActions?: MessageActionOrderByCompositeAggregateInput;
}
