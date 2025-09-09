import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoryMediaCreateInput } from './story-media-create.input';
import { Type } from 'class-transformer';

@InputType()
export class StoryMediaCreateEnvelopeInput {

    @Field(() => StoryMediaCreateInput, {nullable:true})
    @Type(() => StoryMediaCreateInput)
    set?: StoryMediaCreateInput;
}
