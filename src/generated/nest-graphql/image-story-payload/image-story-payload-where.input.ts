import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ImageStoryPayloadWhereInput {

    @Field(() => [ImageStoryPayloadWhereInput], {nullable:true})
    AND?: Array<ImageStoryPayloadWhereInput>;

    @Field(() => [ImageStoryPayloadWhereInput], {nullable:true})
    OR?: Array<ImageStoryPayloadWhereInput>;

    @Field(() => [ImageStoryPayloadWhereInput], {nullable:true})
    NOT?: Array<ImageStoryPayloadWhereInput>;

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
