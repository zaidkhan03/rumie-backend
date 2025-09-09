import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MessageAction } from '../message-action/message-action.model';

@ObjectType()
export class MessageActions {

    @Field(() => [MessageAction], {nullable:true})
    senderActions?: Array<MessageAction>;

    @Field(() => [MessageAction], {nullable:true})
    receiverActions?: Array<MessageAction>;
}
