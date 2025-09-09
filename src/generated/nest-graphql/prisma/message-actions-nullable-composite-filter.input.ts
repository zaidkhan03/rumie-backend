import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageActionsObjectEqualityInput } from './message-actions-object-equality.input';
import { MessageActionsWhereInput } from '../message-actions/message-actions-where.input';

@InputType()
export class MessageActionsNullableCompositeFilter {

    @Field(() => MessageActionsObjectEqualityInput, {nullable:true})
    equals?: MessageActionsObjectEqualityInput;

    @Field(() => MessageActionsWhereInput, {nullable:true})
    is?: MessageActionsWhereInput;

    @Field(() => MessageActionsWhereInput, {nullable:true})
    isNot?: MessageActionsWhereInput;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
