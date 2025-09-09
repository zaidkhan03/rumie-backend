import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductBubbleCreateInput } from '../product-bubble/product-bubble-create.input';
import { Float } from '@nestjs/graphql';

@InputType()
export class DealOfferBubbleCreateInput {

    @Field(() => String, {nullable:false})
    headerText!: string;

    @Field(() => ProductBubbleCreateInput, {nullable:false})
    product!: ProductBubbleCreateInput;

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
