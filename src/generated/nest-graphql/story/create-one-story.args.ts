import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryCreateInput } from './story-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneStoryArgs {

    @Field(() => StoryCreateInput, {nullable:false})
    @Type(() => StoryCreateInput)
    data!: StoryCreateInput;
}
