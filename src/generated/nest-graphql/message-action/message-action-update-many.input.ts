import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageActionWhereInput } from './message-action-where.input';
import { Type } from 'class-transformer';
import { MessageActionUpdateInput } from './message-action-update.input';

@InputType()
export class MessageActionUpdateManyInput {

    @Field(() => MessageActionWhereInput, {nullable:false})
    @Type(() => MessageActionWhereInput)
    where!: MessageActionWhereInput;

    @Field(() => MessageActionUpdateInput, {nullable:false})
    @Type(() => MessageActionUpdateInput)
    data!: MessageActionUpdateInput;
}
