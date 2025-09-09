import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoryProductPayloadObjectEqualityInput } from './story-product-payload-object-equality.input';
import { StoryProductPayloadWhereInput } from '../story-product-payload/story-product-payload-where.input';

@InputType()
export class StoryProductPayloadCompositeFilter {

    @Field(() => StoryProductPayloadObjectEqualityInput, {nullable:true})
    equals?: StoryProductPayloadObjectEqualityInput;

    @Field(() => StoryProductPayloadWhereInput, {nullable:true})
    is?: StoryProductPayloadWhereInput;

    @Field(() => StoryProductPayloadWhereInput, {nullable:true})
    isNot?: StoryProductPayloadWhereInput;
}
