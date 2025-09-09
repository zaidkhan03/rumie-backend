import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductBubbleOrderByInput } from '../product-bubble/product-bubble-order-by.input';

@InputType()
export class DealOfferBubbleOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    headerText?: `${SortOrder}`;

    @Field(() => ProductBubbleOrderByInput, {nullable:true})
    product?: ProductBubbleOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    offerPrice?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shippingFee?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    totalPrice?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    sellerAddressId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    buyerAddressId?: `${SortOrder}`;
}
