import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryReactionWhereInput } from './story-reaction-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyStoryReactionArgs {

    @Field(() => StoryReactionWhereInput, {nullable:true})
    @Type(() => StoryReactionWhereInput)
    where?: StoryReactionWhereInput;
}
