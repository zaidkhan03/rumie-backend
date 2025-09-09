import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatMessageType } from './campus-chat-message-type.enum';

@InputType()
export class EnumCampusChatMessageTypeFieldUpdateOperationsInput {

    @Field(() => CampusChatMessageType, {nullable:true})
    set?: `${CampusChatMessageType}`;
}
