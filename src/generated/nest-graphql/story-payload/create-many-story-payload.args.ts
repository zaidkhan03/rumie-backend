import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryPayloadCreateManyInput } from './story-payload-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyStoryPayloadArgs {

    @Field(() => [StoryPayloadCreateManyInput], {nullable:false})
    @Type(() => StoryPayloadCreateManyInput)
    data!: Array<StoryPayloadCreateManyInput>;
}
