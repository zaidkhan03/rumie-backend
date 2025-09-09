import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumReactionTypeWithAggregatesFilter } from '../prisma/enum-reaction-type-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class StoryReactionScalarWhereWithAggregatesInput {

    @Field(() => [StoryReactionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StoryReactionScalarWhereWithAggregatesInput>;

    @Field(() => [StoryReactionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StoryReactionScalarWhereWithAggregatesInput>;

    @Field(() => [StoryReactionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StoryReactionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    storyId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => EnumReactionTypeWithAggregatesFilter, {nullable:true})
    type?: EnumReactionTypeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    active?: BoolWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    previousReactionId?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    removedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
