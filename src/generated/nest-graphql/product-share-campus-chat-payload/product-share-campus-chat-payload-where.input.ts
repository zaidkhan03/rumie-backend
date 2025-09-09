import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { MediaItemCompositeFilter } from '../prisma/media-item-composite-filter.input';
import { EnumProductListingTypeFilter } from '../prisma/enum-product-listing-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ProductShareCampusChatPayloadWhereInput {

    @Field(() => [ProductShareCampusChatPayloadWhereInput], {nullable:true})
    AND?: Array<ProductShareCampusChatPayloadWhereInput>;

    @Field(() => [ProductShareCampusChatPayloadWhereInput], {nullable:true})
    OR?: Array<ProductShareCampusChatPayloadWhereInput>;

    @Field(() => [ProductShareCampusChatPayloadWhereInput], {nullable:true})
    NOT?: Array<ProductShareCampusChatPayloadWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    price?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    priceString?: StringFilter;

    @Field(() => MediaItemCompositeFilter, {nullable:true})
    mediaItem?: MediaItemCompositeFilter;

    @Field(() => EnumProductListingTypeFilter, {nullable:true})
    type?: EnumProductListingTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    text?: StringNullableFilter;
}
