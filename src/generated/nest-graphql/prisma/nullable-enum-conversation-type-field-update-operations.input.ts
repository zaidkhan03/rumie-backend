import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConversationType } from './conversation-type.enum';

@InputType()
export class NullableEnumConversationTypeFieldUpdateOperationsInput {

    @Field(() => ConversationType, {nullable:true})
    set?: `${ConversationType}`;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
