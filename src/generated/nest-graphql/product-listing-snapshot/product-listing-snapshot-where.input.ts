import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { MediaItemObjectEqualityInput } from '../prisma/media-item-object-equality.input';
import { EnumProductDeliveryModeFilter } from '../prisma/enum-product-delivery-mode-filter.input';
import { EnumProductListingTypeFilter } from '../prisma/enum-product-listing-type-filter.input';
import { PackageWeightNullableCompositeFilter } from '../prisma/package-weight-nullable-composite-filter.input';
import { PackageDimensionsNullableCompositeFilter } from '../prisma/package-dimensions-nullable-composite-filter.input';

@InputType()
export class ProductListingSnapshotWhereInput {

    @Field(() => [ProductListingSnapshotWhereInput], {nullable:true})
    AND?: Array<ProductListingSnapshotWhereInput>;

    @Field(() => [ProductListingSnapshotWhereInput], {nullable:true})
    OR?: Array<ProductListingSnapshotWhereInput>;

    @Field(() => [ProductListingSnapshotWhereInput], {nullable:true})
    NOT?: Array<ProductListingSnapshotWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    price?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    productCondition?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    colorName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    brandName?: StringNullableFilter;

    @Field(() => [MediaItemObjectEqualityInput], {nullable:true})
    media?: Array<MediaItemObjectEqualityInput>;

    @Field(() => EnumProductDeliveryModeFilter, {nullable:true})
    deliveryMode?: EnumProductDeliveryModeFilter;

    @Field(() => EnumProductListingTypeFilter, {nullable:true})
    type?: EnumProductListingTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    shippingFrom?: StringNullableFilter;

    @Field(() => PackageWeightNullableCompositeFilter, {nullable:true})
    packageWeight?: PackageWeightNullableCompositeFilter;

    @Field(() => PackageDimensionsNullableCompositeFilter, {nullable:true})
    packageDimensions?: PackageDimensionsNullableCompositeFilter;
}
