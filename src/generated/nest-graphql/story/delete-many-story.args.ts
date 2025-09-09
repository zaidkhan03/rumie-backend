import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryWhereInput } from './story-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyStoryArgs {

    @Field(() => StoryWhereInput, {nullable:true})
    @Type(() => StoryWhereInput)
    where?: StoryWhereInput;
}
