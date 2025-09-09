import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class StoryViewScalarWhereWithAggregatesInput {

    @Field(() => [StoryViewScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StoryViewScalarWhereWithAggregatesInput>;

    @Field(() => [StoryViewScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StoryViewScalarWhereWithAggregatesInput>;

    @Field(() => [StoryViewScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StoryViewScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    storyId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
