import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryViewCreateManyInput } from './story-view-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyStoryViewArgs {

    @Field(() => [StoryViewCreateManyInput], {nullable:false})
    @Type(() => StoryViewCreateManyInput)
    data!: Array<StoryViewCreateManyInput>;
}
