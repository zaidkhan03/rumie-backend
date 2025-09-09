import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductBubble } from '../product-bubble/product-bubble.model';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class DealOfferBubble {

    @Field(() => String, {nullable:false})
    headerText!: string;

    @Field(() => ProductBubble, {nullable:false})
    product?: ProductBubble;

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
