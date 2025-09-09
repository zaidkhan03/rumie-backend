import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageActionCreateInput } from '../message-action/message-action-create.input';
import { Type } from 'class-transformer';
import { MessageActionUpdateManyInput } from '../message-action/message-action-update-many.input';
import { MessageActionDeleteManyInput } from './message-action-delete-many.input';

@InputType()
export class MessageActionListUpdateEnvelopeInput {

    @Field(() => [MessageActionCreateInput], {nullable:true})
    @Type(() => MessageActionCreateInput)
    set?: Array<MessageActionCreateInput>;

    @Field(() => [MessageActionCreateInput], {nullable:true})
    push?: Array<MessageActionCreateInput>;

    @Field(() => MessageActionUpdateManyInput, {nullable:true})
    @Type(() => MessageActionUpdateManyInput)
    updateMany?: MessageActionUpdateManyInput;

    @Field(() => MessageActionDeleteManyInput, {nullable:true})
    @Type(() => MessageActionDeleteManyInput)
    deleteMany?: MessageActionDeleteManyInput;
}
