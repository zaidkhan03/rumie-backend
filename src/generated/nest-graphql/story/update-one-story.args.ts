import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryUpdateInput } from './story-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { StoryWhereUniqueInput } from './story-where-unique.input';

@ArgsType()
export class UpdateOneStoryArgs {

    @Field(() => StoryUpdateInput, {nullable:false})
    @Type(() => StoryUpdateInput)
    data!: StoryUpdateInput;

    @Field(() => StoryWhereUniqueInput, {nullable:false})
    @Type(() => StoryWhereUniqueInput)
    where!: Prisma.AtLeast<StoryWhereUniqueInput, 'id'>;
}
