import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StoryReactionWhereUniqueInput } from './story-reaction-where-unique.input';
import { Type } from 'class-transformer';
import { StoryReactionCreateInput } from './story-reaction-create.input';
import { StoryReactionUpdateInput } from './story-reaction-update.input';

@ArgsType()
export class UpsertOneStoryReactionArgs {

    @Field(() => StoryReactionWhereUniqueInput, {nullable:false})
    @Type(() => StoryReactionWhereUniqueInput)
    where!: Prisma.AtLeast<StoryReactionWhereUniqueInput, 'id'>;

    @Field(() => StoryReactionCreateInput, {nullable:false})
    @Type(() => StoryReactionCreateInput)
    create!: StoryReactionCreateInput;

    @Field(() => StoryReactionUpdateInput, {nullable:false})
    @Type(() => StoryReactionUpdateInput)
    update!: StoryReactionUpdateInput;
}
