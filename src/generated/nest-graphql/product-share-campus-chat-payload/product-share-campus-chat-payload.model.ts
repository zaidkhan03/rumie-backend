import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { MediaItem } from '../media-item/media-item.model';
import { ProductListingType } from '../prisma/product-listing-type.enum';

@ObjectType()
export class ProductShareCampusChatPayload {

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Float, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:false})
    priceString!: string;

    @Field(() => MediaItem, {nullable:false})
    mediaItem?: MediaItem;

    @Field(() => ProductListingType, {nullable:false})
    type!: `${ProductListingType}`;

    @Field(() => String, {nullable:true})
    text!: string | null;
}
