import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class StoryPayloadScalarWhereWithAggregatesInput {

    @Field(() => [StoryPayloadScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StoryPayloadScalarWhereWithAggregatesInput>;

    @Field(() => [StoryPayloadScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StoryPayloadScalarWhereWithAggregatesInput>;

    @Field(() => [StoryPayloadScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StoryPayloadScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;
}
