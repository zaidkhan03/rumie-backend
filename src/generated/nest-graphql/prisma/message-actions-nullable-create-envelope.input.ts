import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageActionsCreateInput } from '../message-actions/message-actions-create.input';
import { Type } from 'class-transformer';

@InputType()
export class MessageActionsNullableCreateEnvelopeInput {

    @Field(() => MessageActionsCreateInput, {nullable:true})
    @Type(() => MessageActionsCreateInput)
    set?: MessageActionsCreateInput;
}
