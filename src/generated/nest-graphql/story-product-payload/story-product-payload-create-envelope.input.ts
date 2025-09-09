import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoryProductPayloadCreateInput } from './story-product-payload-create.input';
import { Type } from 'class-transformer';

@InputType()
export class StoryProductPayloadCreateEnvelopeInput {

    @Field(() => StoryProductPayloadCreateInput, {nullable:true})
    @Type(() => StoryProductPayloadCreateInput)
    set?: StoryProductPayloadCreateInput;
}
