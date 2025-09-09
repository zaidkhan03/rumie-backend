import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryReactionUpdateManyMutationInput } from './story-reaction-update-many-mutation.input';
import { Type } from 'class-transformer';
import { StoryReactionWhereInput } from './story-reaction-where.input';

@ArgsType()
export class UpdateManyStoryReactionArgs {

    @Field(() => StoryReactionUpdateManyMutationInput, {nullable:false})
    @Type(() => StoryReactionUpdateManyMutationInput)
    data!: StoryReactionUpdateManyMutationInput;

    @Field(() => StoryReactionWhereInput, {nullable:true})
    @Type(() => StoryReactionWhereInput)
    where?: StoryReactionWhereInput;
}
