import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryViewUpdateInput } from './story-view-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { StoryViewWhereUniqueInput } from './story-view-where-unique.input';

@ArgsType()
export class UpdateOneStoryViewArgs {

    @Field(() => StoryViewUpdateInput, {nullable:false})
    @Type(() => StoryViewUpdateInput)
    data!: StoryViewUpdateInput;

    @Field(() => StoryViewWhereUniqueInput, {nullable:false})
    @Type(() => StoryViewWhereUniqueInput)
    where!: Prisma.AtLeast<StoryViewWhereUniqueInput, 'id'>;
}
