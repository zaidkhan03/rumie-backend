import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryReactionCreateInput } from './story-reaction-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneStoryReactionArgs {

    @Field(() => StoryReactionCreateInput, {nullable:false})
    @Type(() => StoryReactionCreateInput)
    data!: StoryReactionCreateInput;
}
