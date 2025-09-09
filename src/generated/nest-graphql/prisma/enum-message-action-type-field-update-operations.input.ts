import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageActionType } from './message-action-type.enum';

@InputType()
export class EnumMessageActionTypeFieldUpdateOperationsInput {

    @Field(() => MessageActionType, {nullable:true})
    set?: `${MessageActionType}`;
}
