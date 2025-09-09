import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoryPayloadWhereInput } from './story-payload-where.input';
import { StoryProductPayloadCompositeFilter } from '../prisma/story-product-payload-composite-filter.input';
import { ImageStoryPayloadCompositeFilter } from '../prisma/image-story-payload-composite-filter.input';

@InputType()
export class StoryPayloadWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [StoryPayloadWhereInput], {nullable:true})
    AND?: Array<StoryPayloadWhereInput>;

    @Field(() => [StoryPayloadWhereInput], {nullable:true})
    OR?: Array<StoryPayloadWhereInput>;

    @Field(() => [StoryPayloadWhereInput], {nullable:true})
    NOT?: Array<StoryPayloadWhereInput>;

    @Field(() => StoryProductPayloadCompositeFilter, {nullable:true})
    photo?: StoryProductPayloadCompositeFilter;

    @Field(() => ImageStoryPayloadCompositeFilter, {nullable:true})
    image?: ImageStoryPayloadCompositeFilter;
}
