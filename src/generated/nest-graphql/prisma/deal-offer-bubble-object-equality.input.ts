import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductBubbleObjectEqualityInput } from './product-bubble-object-equality.input';
import { Float } from '@nestjs/graphql';

@InputType()
export class DealOfferBubbleObjectEqualityInput {

    @Field(() => String, {nullable:false})
    headerText!: string;

    @Field(() => ProductBubbleObjectEqualityInput, {nullable:false})
    product!: ProductBubbleObjectEqualityInput;

    @Field(() => Float, {nullable:false})
    offerPrice!: number;

    @Field(() => Float, {nullable:false})
    shippingFee!: number;

    @Field(() => Float, {nullable:false})
    totalPrice!: number;

    @Field(() => String, {nullable:false})
    sellerAddressId!: string;

    @Field(() => String, {nullable:false})
    buyerAddressId!: string;
}
