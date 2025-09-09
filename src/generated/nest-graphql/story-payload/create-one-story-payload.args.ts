import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryPayloadCreateInput } from './story-payload-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneStoryPayloadArgs {

    @Field(() => StoryPayloadCreateInput, {nullable:false})
    @Type(() => StoryPayloadCreateInput)
    data!: StoryPayloadCreateInput;
}
