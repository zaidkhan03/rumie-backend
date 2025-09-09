import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageActionObjectEqualityInput } from './message-action-object-equality.input';

@InputType()
export class MessageActionsObjectEqualityInput {

    @Field(() => [MessageActionObjectEqualityInput], {nullable:true})
    senderActions?: Array<MessageActionObjectEqualityInput>;

    @Field(() => [MessageActionObjectEqualityInput], {nullable:true})
    receiverActions?: Array<MessageActionObjectEqualityInput>;
}
