import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumMessageTypeFilter } from '../prisma/enum-message-type-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { MessageActionsNullableCompositeFilter } from '../prisma/message-actions-nullable-composite-filter.input';
import { EnumMessageStateNullableFilter } from '../prisma/enum-message-state-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class MessageWhereInput {

    @Field(() => [MessageWhereInput], {nullable:true})
    AND?: Array<MessageWhereInput>;

    @Field(() => [MessageWhereInput], {nullable:true})
    OR?: Array<MessageWhereInput>;

    @Field(() => [MessageWhereInput], {nullable:true})
    NOT?: Array<MessageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    clientId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    senderId?: StringFilter;

    @Field(() => EnumMessageTypeFilter, {nullable:true})
    type?: EnumMessageTypeFilter;

    @Field(() => JsonFilter, {nullable:true})
    payload?: JsonFilter;

    @Field(() => MessageActionsNullableCompositeFilter, {nullable:true})
    actions?: MessageActionsNullableCompositeFilter;

    @Field(() => EnumMessageStateNullableFilter, {nullable:true})
    state?: EnumMessageStateNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    conversationId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
