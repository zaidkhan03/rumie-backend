import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaItemObjectEqualityInput } from './media-item-object-equality.input';
import { ProductDeliveryMode } from './product-delivery-mode.enum';
import { ProductListingType } from './product-listing-type.enum';
import { PackageWeightObjectEqualityInput } from './package-weight-object-equality.input';
import { PackageDimensionsObjectEqualityInput } from './package-dimensions-object-equality.input';

@InputType()
export class ProductListingSnapshotObjectEqualityInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    price!: string;

    @Field(() => String, {nullable:false})
    productCondition!: string;

    @Field(() => String, {nullable:true})
    colorName?: string;

    @Field(() => String, {nullable:true})
    brandName?: string;

    @Field(() => [MediaItemObjectEqualityInput], {nullable:true})
    media?: Array<MediaItemObjectEqualityInput>;

    @Field(() => ProductDeliveryMode, {nullable:false})
    deliveryMode!: `${ProductDeliveryMode}`;

    @Field(() => ProductListingType, {nullable:false})
    type!: `${ProductListingType}`;

    @Field(() => String, {nullable:true})
    shippingFrom?: string;

    @Field(() => PackageWeightObjectEqualityInput, {nullable:true})
    packageWeight?: PackageWeightObjectEqualityInput;

    @Field(() => PackageDimensionsObjectEqualityInput, {nullable:true})
    packageDimensions?: PackageDimensionsObjectEqualityInput;
}
