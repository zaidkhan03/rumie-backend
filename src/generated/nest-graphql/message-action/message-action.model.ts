import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MessageActionType } from '../prisma/message-action-type.enum';

@ObjectType()
export class MessageAction {

    @Field(() => MessageActionType, {nullable:false})
    type!: `${MessageActionType}`;

    @Field(() => String, {nullable:false})
    label!: string;
}
