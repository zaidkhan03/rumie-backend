import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryCreateManyInput } from './story-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyStoryArgs {

    @Field(() => [StoryCreateManyInput], {nullable:false})
    @Type(() => StoryCreateManyInput)
    data!: Array<StoryCreateManyInput>;
}
