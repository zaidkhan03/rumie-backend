import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageType } from './message-type.enum';

@InputType()
export class EnumMessageTypeFieldUpdateOperationsInput {

    @Field(() => MessageType, {nullable:true})
    set?: `${MessageType}`;
}
