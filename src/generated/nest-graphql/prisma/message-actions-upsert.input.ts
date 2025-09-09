import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageActionsCreateInput } from '../message-actions/message-actions-create.input';
import { Type } from 'class-transformer';
import { MessageActionsUpdateInput } from '../message-actions/message-actions-update.input';

@InputType()
export class MessageActionsUpsertInput {

    @Field(() => MessageActionsCreateInput, {nullable:false})
    @Type(() => MessageActionsCreateInput)
    set!: MessageActionsCreateInput;

    @Field(() => MessageActionsUpdateInput, {nullable:false})
    @Type(() => MessageActionsUpdateInput)
    update!: MessageActionsUpdateInput;
}
