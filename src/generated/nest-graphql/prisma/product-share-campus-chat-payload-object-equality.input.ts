import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { MediaItemObjectEqualityInput } from './media-item-object-equality.input';
import { ProductListingType } from './product-listing-type.enum';

@InputType()
export class ProductShareCampusChatPayloadObjectEqualityInput {

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Float, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:false})
    priceString!: string;

    @Field(() => MediaItemObjectEqualityInput, {nullable:false})
    mediaItem!: MediaItemObjectEqualityInput;

    @Field(() => ProductListingType, {nullable:false})
    type!: `${ProductListingType}`;

    @Field(() => String, {nullable:true})
    text?: string;
}
