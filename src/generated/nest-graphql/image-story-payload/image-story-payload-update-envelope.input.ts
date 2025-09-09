import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageStoryPayloadCreateInput } from './image-story-payload-create.input';
import { Type } from 'class-transformer';
import { ImageStoryPayloadUpdateInput } from './image-story-payload-update.input';

@InputType()
export class ImageStoryPayloadUpdateEnvelopeInput {

    @Field(() => ImageStoryPayloadCreateInput, {nullable:true})
    @Type(() => ImageStoryPayloadCreateInput)
    set?: ImageStoryPayloadCreateInput;

    @Field(() => ImageStoryPayloadUpdateInput, {nullable:true})
    @Type(() => ImageStoryPayloadUpdateInput)
    update?: ImageStoryPayloadUpdateInput;
}
