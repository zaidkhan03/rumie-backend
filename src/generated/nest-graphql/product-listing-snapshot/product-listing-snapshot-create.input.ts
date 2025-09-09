import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaItemCreateInput } from '../media-item/media-item-create.input';
import { ProductDeliveryMode } from '../prisma/product-delivery-mode.enum';
import { ProductListingType } from '../prisma/product-listing-type.enum';
import { PackageWeightCreateInput } from '../package-weight/package-weight-create.input';
import { PackageDimensionsCreateInput } from '../package-dimensions/package-dimensions-create.input';

@InputType()
export class ProductListingSnapshotCreateInput {

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

    @Field(() => [MediaItemCreateInput], {nullable:true})
    media?: Array<MediaItemCreateInput>;

    @Field(() => ProductDeliveryMode, {nullable:false})
    deliveryMode!: `${ProductDeliveryMode}`;

    @Field(() => ProductListingType, {nullable:false})
    type!: `${ProductListingType}`;

    @Field(() => String, {nullable:true})
    shippingFrom?: string;

    @Field(() => PackageWeightCreateInput, {nullable:true})
    packageWeight?: PackageWeightCreateInput;

    @Field(() => PackageDimensionsCreateInput, {nullable:true})
    packageDimensions?: PackageDimensionsCreateInput;
}
