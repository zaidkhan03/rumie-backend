import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryViewCreateInput } from './story-view-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneStoryViewArgs {

    @Field(() => StoryViewCreateInput, {nullable:false})
    @Type(() => StoryViewCreateInput)
    data!: StoryViewCreateInput;
}
