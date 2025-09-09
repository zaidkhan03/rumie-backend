import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoryMediaCreateInput } from './story-media-create.input';
import { Type } from 'class-transformer';
import { StoryMediaUpdateInput } from './story-media-update.input';

@InputType()
export class StoryMediaUpdateEnvelopeInput {

    @Field(() => StoryMediaCreateInput, {nullable:true})
    @Type(() => StoryMediaCreateInput)
    set?: StoryMediaCreateInput;

    @Field(() => StoryMediaUpdateInput, {nullable:true})
    @Type(() => StoryMediaUpdateInput)
    update?: StoryMediaUpdateInput;
}
