import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryViewUpdateManyMutationInput } from './story-view-update-many-mutation.input';
import { Type } from 'class-transformer';
import { StoryViewWhereInput } from './story-view-where.input';

@ArgsType()
export class UpdateManyStoryViewArgs {

    @Field(() => StoryViewUpdateManyMutationInput, {nullable:false})
    @Type(() => StoryViewUpdateManyMutationInput)
    data!: StoryViewUpdateManyMutationInput;

    @Field(() => StoryViewWhereInput, {nullable:true})
    @Type(() => StoryViewWhereInput)
    where?: StoryViewWhereInput;
}
