import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatType } from './campus-chat-type.enum';

@InputType()
export class EnumCampusChatTypeFieldUpdateOperationsInput {

    @Field(() => CampusChatType, {nullable:true})
    set?: `${CampusChatType}`;
}
