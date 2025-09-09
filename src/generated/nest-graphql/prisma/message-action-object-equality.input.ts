import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageActionType } from './message-action-type.enum';

@InputType()
export class MessageActionObjectEqualityInput {

    @Field(() => MessageActionType, {nullable:false})
    type!: `${MessageActionType}`;

    @Field(() => String, {nullable:false})
    label!: string;
}
