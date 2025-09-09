import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class TextCampusChatPayloadWhereInput {

    @Field(() => [TextCampusChatPayloadWhereInput], {nullable:true})
    AND?: Array<TextCampusChatPayloadWhereInput>;

    @Field(() => [TextCampusChatPayloadWhereInput], {nullable:true})
    OR?: Array<TextCampusChatPayloadWhereInput>;

    @Field(() => [TextCampusChatPayloadWhereInput], {nullable:true})
    NOT?: Array<TextCampusChatPayloadWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    title?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;
}
