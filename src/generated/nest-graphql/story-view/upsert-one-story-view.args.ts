import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StoryViewWhereUniqueInput } from './story-view-where-unique.input';
import { Type } from 'class-transformer';
import { StoryViewCreateInput } from './story-view-create.input';
import { StoryViewUpdateInput } from './story-view-update.input';

@ArgsType()
export class UpsertOneStoryViewArgs {

    @Field(() => StoryViewWhereUniqueInput, {nullable:false})
    @Type(() => StoryViewWhereUniqueInput)
    where!: Prisma.AtLeast<StoryViewWhereUniqueInput, 'id'>;

    @Field(() => StoryViewCreateInput, {nullable:false})
    @Type(() => StoryViewCreateInput)
    create!: StoryViewCreateInput;

    @Field(() => StoryViewUpdateInput, {nullable:false})
    @Type(() => StoryViewUpdateInput)
    update!: StoryViewUpdateInput;
}
