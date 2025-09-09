import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StoryReactionWhereUniqueInput } from './story-reaction-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneStoryReactionArgs {

    @Field(() => StoryReactionWhereUniqueInput, {nullable:false})
    @Type(() => StoryReactionWhereUniqueInput)
    where!: Prisma.AtLeast<StoryReactionWhereUniqueInput, 'id'>;
}
