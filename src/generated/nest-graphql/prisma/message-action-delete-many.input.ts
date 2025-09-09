import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageActionWhereInput } from '../message-action/message-action-where.input';
import { Type } from 'class-transformer';

@InputType()
export class MessageActionDeleteManyInput {

    @Field(() => MessageActionWhereInput, {nullable:false})
    @Type(() => MessageActionWhereInput)
    where!: MessageActionWhereInput;
}
