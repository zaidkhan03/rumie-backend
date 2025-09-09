import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryReactionCreateManyInput } from './story-reaction-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyStoryReactionArgs {

    @Field(() => [StoryReactionCreateManyInput], {nullable:false})
    @Type(() => StoryReactionCreateManyInput)
    data!: Array<StoryReactionCreateManyInput>;
}
