import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoryViewWhereInput } from './story-view-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class StoryViewWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [StoryViewWhereInput], {nullable:true})
    AND?: Array<StoryViewWhereInput>;

    @Field(() => [StoryViewWhereInput], {nullable:true})
    OR?: Array<StoryViewWhereInput>;

    @Field(() => [StoryViewWhereInput], {nullable:true})
    NOT?: Array<StoryViewWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    storyId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
