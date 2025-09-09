import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryReactionUpdateInput } from './story-reaction-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { StoryReactionWhereUniqueInput } from './story-reaction-where-unique.input';

@ArgsType()
export class UpdateOneStoryReactionArgs {

    @Field(() => StoryReactionUpdateInput, {nullable:false})
    @Type(() => StoryReactionUpdateInput)
    data!: StoryReactionUpdateInput;

    @Field(() => StoryReactionWhereUniqueInput, {nullable:false})
    @Type(() => StoryReactionWhereUniqueInput)
    where!: Prisma.AtLeast<StoryReactionWhereUniqueInput, 'id'>;
}
