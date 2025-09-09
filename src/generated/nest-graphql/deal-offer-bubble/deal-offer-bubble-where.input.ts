import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ProductBubbleCompositeFilter } from '../prisma/product-bubble-composite-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';

@InputType()
export class DealOfferBubbleWhereInput {

    @Field(() => [DealOfferBubbleWhereInput], {nullable:true})
    AND?: Array<DealOfferBubbleWhereInput>;

    @Field(() => [DealOfferBubbleWhereInput], {nullable:true})
    OR?: Array<DealOfferBubbleWhereInput>;

    @Field(() => [DealOfferBubbleWhereInput], {nullable:true})
    NOT?: Array<DealOfferBubbleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    headerText?: StringFilter;

    @Field(() => ProductBubbleCompositeFilter, {nullable:true})
    product?: ProductBubbleCompositeFilter;

    @Field(() => FloatFilter, {nullable:true})
    offerPrice?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    shippingFee?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    totalPrice?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    sellerAddressId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    buyerAddressId?: StringFilter;
}
