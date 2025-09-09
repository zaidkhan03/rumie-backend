import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryPayloadWhereInput } from './story-payload-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyStoryPayloadArgs {

    @Field(() => StoryPayloadWhereInput, {nullable:true})
    @Type(() => StoryPayloadWhereInput)
    where?: StoryPayloadWhereInput;
}
