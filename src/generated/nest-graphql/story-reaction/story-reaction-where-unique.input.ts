import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoryReactionWhereInput } from './story-reaction-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumReactionTypeFilter } from '../prisma/enum-reaction-type-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class StoryReactionWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [StoryReactionWhereInput], {nullable:true})
    AND?: Array<StoryReactionWhereInput>;

    @Field(() => [StoryReactionWhereInput], {nullable:true})
    OR?: Array<StoryReactionWhereInput>;

    @Field(() => [StoryReactionWhereInput], {nullable:true})
    NOT?: Array<StoryReactionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    storyId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => EnumReactionTypeFilter, {nullable:true})
    type?: EnumReactionTypeFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    previousReactionId?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    removedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
