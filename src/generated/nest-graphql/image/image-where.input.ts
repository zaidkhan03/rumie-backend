import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';

@InputType()
export class ImageWhereInput {

    @Field(() => [ImageWhereInput], {nullable:true})
    AND?: Array<ImageWhereInput>;

    @Field(() => [ImageWhereInput], {nullable:true})
    OR?: Array<ImageWhereInput>;

    @Field(() => [ImageWhereInput], {nullable:true})
    NOT?: Array<ImageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    order?: IntNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    mainImage?: BoolNullableFilter;
}
