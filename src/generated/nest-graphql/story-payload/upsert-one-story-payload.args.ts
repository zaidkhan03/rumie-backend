import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StoryPayloadWhereUniqueInput } from './story-payload-where-unique.input';
import { Type } from 'class-transformer';
import { StoryPayloadCreateInput } from './story-payload-create.input';
import { StoryPayloadUpdateInput } from './story-payload-update.input';

@ArgsType()
export class UpsertOneStoryPayloadArgs {

    @Field(() => StoryPayloadWhereUniqueInput, {nullable:false})
    @Type(() => StoryPayloadWhereUniqueInput)
    where!: Prisma.AtLeast<StoryPayloadWhereUniqueInput, 'id'>;

    @Field(() => StoryPayloadCreateInput, {nullable:false})
    @Type(() => StoryPayloadCreateInput)
    create!: StoryPayloadCreateInput;

    @Field(() => StoryPayloadUpdateInput, {nullable:false})
    @Type(() => StoryPayloadUpdateInput)
    update!: StoryPayloadUpdateInput;
}
