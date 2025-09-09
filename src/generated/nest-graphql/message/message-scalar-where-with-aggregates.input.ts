import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumMessageTypeWithAggregatesFilter } from '../prisma/enum-message-type-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { EnumMessageStateNullableWithAggregatesFilter } from '../prisma/enum-message-state-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class MessageScalarWhereWithAggregatesInput {

    @Field(() => [MessageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MessageScalarWhereWithAggregatesInput>;

    @Field(() => [MessageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MessageScalarWhereWithAggregatesInput>;

    @Field(() => [MessageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MessageScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    clientId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    senderId?: StringWithAggregatesFilter;

    @Field(() => EnumMessageTypeWithAggregatesFilter, {nullable:true})
    type?: EnumMessageTypeWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    payload?: JsonWithAggregatesFilter;

    @Field(() => EnumMessageStateNullableWithAggregatesFilter, {nullable:true})
    state?: EnumMessageStateNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    conversationId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
