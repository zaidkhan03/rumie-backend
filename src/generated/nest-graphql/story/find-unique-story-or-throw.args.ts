import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StoryWhereUniqueInput } from './story-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueStoryOrThrowArgs {

    @Field(() => StoryWhereUniqueInput, {nullable:false})
    @Type(() => StoryWhereUniqueInput)
    where!: Prisma.AtLeast<StoryWhereUniqueInput, 'id'>;
}
