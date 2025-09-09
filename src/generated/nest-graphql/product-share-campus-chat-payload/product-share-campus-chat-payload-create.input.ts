import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { MediaItemCreateInput } from '../media-item/media-item-create.input';
import { ProductListingType } from '../prisma/product-listing-type.enum';

@InputType()
export class ProductShareCampusChatPayloadCreateInput {

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Float, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:false})
    priceString!: string;

    @Field(() => MediaItemCreateInput, {nullable:false})
    mediaItem!: MediaItemCreateInput;

    @Field(() => ProductListingType, {nullable:false})
    type!: `${ProductListingType}`;

    @Field(() => String, {nullable:true})
    text?: string;
}
