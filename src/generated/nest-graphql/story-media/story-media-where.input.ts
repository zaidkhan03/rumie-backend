import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumStoryTypeFilter } from '../prisma/enum-story-type-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class StoryMediaWhereInput {

    @Field(() => [StoryMediaWhereInput], {nullable:true})
    AND?: Array<StoryMediaWhereInput>;

    @Field(() => [StoryMediaWhereInput], {nullable:true})
    OR?: Array<StoryMediaWhereInput>;

    @Field(() => [StoryMediaWhereInput], {nullable:true})
    NOT?: Array<StoryMediaWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => EnumStoryTypeFilter, {nullable:true})
    type?: EnumStoryTypeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    duration?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    thumbnail?: StringNullableFilter;
}
