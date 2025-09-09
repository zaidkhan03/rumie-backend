import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StoryProductPayloadCompositeFilter } from '../prisma/story-product-payload-composite-filter.input';
import { ImageStoryPayloadCompositeFilter } from '../prisma/image-story-payload-composite-filter.input';

@InputType()
export class StoryPayloadWhereInput {

    @Field(() => [StoryPayloadWhereInput], {nullable:true})
    AND?: Array<StoryPayloadWhereInput>;

    @Field(() => [StoryPayloadWhereInput], {nullable:true})
    OR?: Array<StoryPayloadWhereInput>;

    @Field(() => [StoryPayloadWhereInput], {nullable:true})
    NOT?: Array<StoryPayloadWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StoryProductPayloadCompositeFilter, {nullable:true})
    photo?: StoryProductPayloadCompositeFilter;

    @Field(() => ImageStoryPayloadCompositeFilter, {nullable:true})
    image?: ImageStoryPayloadCompositeFilter;
}
