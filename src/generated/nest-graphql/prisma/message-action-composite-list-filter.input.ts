import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageActionObjectEqualityInput } from './message-action-object-equality.input';
import { MessageActionWhereInput } from '../message-action/message-action-where.input';

@InputType()
export class MessageActionCompositeListFilter {

    @Field(() => [MessageActionObjectEqualityInput], {nullable:true})
    equals?: Array<MessageActionObjectEqualityInput>;

    @Field(() => MessageActionWhereInput, {nullable:true})
    every?: MessageActionWhereInput;

    @Field(() => MessageActionWhereInput, {nullable:true})
    some?: MessageActionWhereInput;

    @Field(() => MessageActionWhereInput, {nullable:true})
    none?: MessageActionWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
