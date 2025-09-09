import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryPayloadUpdateInput } from './story-payload-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { StoryPayloadWhereUniqueInput } from './story-payload-where-unique.input';

@ArgsType()
export class UpdateOneStoryPayloadArgs {

    @Field(() => StoryPayloadUpdateInput, {nullable:false})
    @Type(() => StoryPayloadUpdateInput)
    data!: StoryPayloadUpdateInput;

    @Field(() => StoryPayloadWhereUniqueInput, {nullable:false})
    @Type(() => StoryPayloadWhereUniqueInput)
    where!: Prisma.AtLeast<StoryPayloadWhereUniqueInput, 'id'>;
}
