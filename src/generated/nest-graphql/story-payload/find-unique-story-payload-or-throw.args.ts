import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StoryPayloadWhereUniqueInput } from './story-payload-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueStoryPayloadOrThrowArgs {

    @Field(() => StoryPayloadWhereUniqueInput, {nullable:false})
    @Type(() => StoryPayloadWhereUniqueInput)
    where!: Prisma.AtLeast<StoryPayloadWhereUniqueInput, 'id'>;
}
