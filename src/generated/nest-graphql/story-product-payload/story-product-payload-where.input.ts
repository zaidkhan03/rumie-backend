import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class StoryProductPayloadWhereInput {

    @Field(() => [StoryProductPayloadWhereInput], {nullable:true})
    AND?: Array<StoryProductPayloadWhereInput>;

    @Field(() => [StoryProductPayloadWhereInput], {nullable:true})
    OR?: Array<StoryProductPayloadWhereInput>;

    @Field(() => [StoryProductPayloadWhereInput], {nullable:true})
    NOT?: Array<StoryProductPayloadWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    fontColor?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    textPosX?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    textPosY?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    textHexCode?: StringNullableFilter;
}
