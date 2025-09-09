import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageState } from './message-state.enum';

@InputType()
export class NullableEnumMessageStateFieldUpdateOperationsInput {

    @Field(() => MessageState, {nullable:true})
    set?: `${MessageState}`;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
