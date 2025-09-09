import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageActionObjectEqualityInput } from '../prisma/message-action-object-equality.input';

@InputType()
export class MessageActionsWhereInput {

    @Field(() => [MessageActionsWhereInput], {nullable:true})
    AND?: Array<MessageActionsWhereInput>;

    @Field(() => [MessageActionsWhereInput], {nullable:true})
    OR?: Array<MessageActionsWhereInput>;

    @Field(() => [MessageActionsWhereInput], {nullable:true})
    NOT?: Array<MessageActionsWhereInput>;

    @Field(() => [MessageActionObjectEqualityInput], {nullable:true})
    senderActions?: Array<MessageActionObjectEqualityInput>;

    @Field(() => [MessageActionObjectEqualityInput], {nullable:true})
    receiverActions?: Array<MessageActionObjectEqualityInput>;
}
