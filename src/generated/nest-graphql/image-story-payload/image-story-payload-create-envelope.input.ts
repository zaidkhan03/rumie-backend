import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageStoryPayloadCreateInput } from './image-story-payload-create.input';
import { Type } from 'class-transformer';

@InputType()
export class ImageStoryPayloadCreateEnvelopeInput {

    @Field(() => ImageStoryPayloadCreateInput, {nullable:true})
    @Type(() => ImageStoryPayloadCreateInput)
    set?: ImageStoryPayloadCreateInput;
}
