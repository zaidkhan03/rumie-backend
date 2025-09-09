import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StoryWhereUniqueInput } from './story-where-unique.input';
import { Type } from 'class-transformer';
import { StoryCreateInput } from './story-create.input';
import { StoryUpdateInput } from './story-update.input';

@ArgsType()
export class UpsertOneStoryArgs {

    @Field(() => StoryWhereUniqueInput, {nullable:false})
    @Type(() => StoryWhereUniqueInput)
    where!: Prisma.AtLeast<StoryWhereUniqueInput, 'id'>;

    @Field(() => StoryCreateInput, {nullable:false})
    @Type(() => StoryCreateInput)
    create!: StoryCreateInput;

    @Field(() => StoryUpdateInput, {nullable:false})
    @Type(() => StoryUpdateInput)
    update!: StoryUpdateInput;
}
