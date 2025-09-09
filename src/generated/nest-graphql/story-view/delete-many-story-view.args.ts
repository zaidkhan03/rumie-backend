import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryViewWhereInput } from './story-view-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyStoryViewArgs {

    @Field(() => StoryViewWhereInput, {nullable:true})
    @Type(() => StoryViewWhereInput)
    where?: StoryViewWhereInput;
}
