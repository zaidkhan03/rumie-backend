import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageActionsCreateInput } from '../message-actions/message-actions-create.input';
import { Type } from 'class-transformer';
import { MessageActionsUpsertInput } from './message-actions-upsert.input';

@InputType()
export class MessageActionsNullableUpdateEnvelopeInput {

    @Field(() => MessageActionsCreateInput, {nullable:true})
    @Type(() => MessageActionsCreateInput)
    set?: MessageActionsCreateInput;

    @Field(() => MessageActionsUpsertInput, {nullable:true})
    @Type(() => MessageActionsUpsertInput)
    upsert?: MessageActionsUpsertInput;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
