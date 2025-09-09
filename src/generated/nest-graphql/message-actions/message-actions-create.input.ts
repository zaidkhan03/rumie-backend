import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageActionCreateInput } from '../message-action/message-action-create.input';

@InputType()
export class MessageActionsCreateInput {

    @Field(() => [MessageActionCreateInput], {nullable:true})
    senderActions?: Array<MessageActionCreateInput>;

    @Field(() => [MessageActionCreateInput], {nullable:true})
    receiverActions?: Array<MessageActionCreateInput>;
}
