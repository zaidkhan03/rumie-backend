import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ChatBubblesScalarWhereWithAggregatesInput {

    @Field(() => [ChatBubblesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ChatBubblesScalarWhereWithAggregatesInput>;

    @Field(() => [ChatBubblesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ChatBubblesScalarWhereWithAggregatesInput>;

    @Field(() => [ChatBubblesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ChatBubblesScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;
}
