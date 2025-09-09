import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoryProductPayloadCreateInput } from './story-product-payload-create.input';
import { Type } from 'class-transformer';
import { StoryProductPayloadUpdateInput } from './story-product-payload-update.input';

@InputType()
export class StoryProductPayloadUpdateEnvelopeInput {

    @Field(() => StoryProductPayloadCreateInput, {nullable:true})
    @Type(() => StoryProductPayloadCreateInput)
    set?: StoryProductPayloadCreateInput;

    @Field(() => StoryProductPayloadUpdateInput, {nullable:true})
    @Type(() => StoryProductPayloadUpdateInput)
    update?: StoryProductPayloadUpdateInput;
}
