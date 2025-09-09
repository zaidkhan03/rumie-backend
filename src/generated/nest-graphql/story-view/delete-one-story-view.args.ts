import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StoryViewWhereUniqueInput } from './story-view-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneStoryViewArgs {

    @Field(() => StoryViewWhereUniqueInput, {nullable:false})
    @Type(() => StoryViewWhereUniqueInput)
    where!: Prisma.AtLeast<StoryViewWhereUniqueInput, 'id'>;
}
