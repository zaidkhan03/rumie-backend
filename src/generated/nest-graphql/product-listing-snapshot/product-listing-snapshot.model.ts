import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MediaItem } from '../media-item/media-item.model';
import { ProductDeliveryMode } from '../prisma/product-delivery-mode.enum';
import { ProductListingType } from '../prisma/product-listing-type.enum';
import { PackageWeight } from '../package-weight/package-weight.model';
import { PackageDimensions } from '../package-dimensions/package-dimensions.model';

@ObjectType()
export class ProductListingSnapshot {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    price!: string;

    @Field(() => String, {nullable:false})
    productCondition!: string;

    @Field(() => String, {nullable:true})
    colorName!: string | null;

    @Field(() => String, {nullable:true})
    brandName!: string | null;

    @Field(() => [MediaItem], {nullable:true})
    media?: Array<MediaItem>;

    @Field(() => ProductDeliveryMode, {nullable:false})
    deliveryMode!: `${ProductDeliveryMode}`;

    @Field(() => ProductListingType, {nullable:false})
    type!: `${ProductListingType}`;

    @Field(() => String, {nullable:true})
    shippingFrom!: string | null;

    @Field(() => PackageWeight, {nullable:true})
    packageWeight?: PackageWeight | null;

    @Field(() => PackageDimensions, {nullable:true})
    packageDimensions?: PackageDimensions | null;
}
