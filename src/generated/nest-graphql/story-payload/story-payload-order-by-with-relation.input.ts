import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StoryProductPayloadOrderByInput } from '../story-product-payload/story-product-payload-order-by.input';
import { ImageStoryPayloadOrderByInput } from '../image-story-payload/image-story-payload-order-by.input';

@InputType()
export class StoryPayloadOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => StoryProductPayloadOrderByInput, {nullable:true})
    photo?: StoryProductPayloadOrderByInput;

    @Field(() => ImageStoryPayloadOrderByInput, {nullable:true})
    image?: ImageStoryPayloadOrderByInput;
}
