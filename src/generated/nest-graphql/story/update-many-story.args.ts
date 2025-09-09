import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryUpdateManyMutationInput } from './story-update-many-mutation.input';
import { Type } from 'class-transformer';
import { StoryWhereInput } from './story-where.input';

@ArgsType()
export class UpdateManyStoryArgs {

    @Field(() => StoryUpdateManyMutationInput, {nullable:false})
    @Type(() => StoryUpdateManyMutationInput)
    data!: StoryUpdateManyMutationInput;

    @Field(() => StoryWhereInput, {nullable:true})
    @Type(() => StoryWhereInput)
    where?: StoryWhereInput;
}
