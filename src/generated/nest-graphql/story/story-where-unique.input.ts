import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoryWhereInput } from './story-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StoryMediaCompositeFilter } from '../prisma/story-media-composite-filter.input';
import { EnumStoryTypeFilter } from '../prisma/enum-story-type-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class StoryWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [StoryWhereInput], {nullable:true})
    AND?: Array<StoryWhereInput>;

    @Field(() => [StoryWhereInput], {nullable:true})
    OR?: Array<StoryWhereInput>;

    @Field(() => [StoryWhereInput], {nullable:true})
    NOT?: Array<StoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StoryMediaCompositeFilter, {nullable:true})
    media?: StoryMediaCompositeFilter;

    @Field(() => EnumStoryTypeFilter, {nullable:true})
    type?: EnumStoryTypeFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    content?: JsonNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    caption?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    backgroundColor?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    viewCount?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    eduInstituteId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expiresAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    archived?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
