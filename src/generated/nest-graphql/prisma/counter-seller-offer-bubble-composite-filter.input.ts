import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CounterSellerOfferBubbleObjectEqualityInput } from './counter-seller-offer-bubble-object-equality.input';
import { CounterSellerOfferBubbleWhereInput } from '../counter-seller-offer-bubble/counter-seller-offer-bubble-where.input';

@InputType()
export class CounterSellerOfferBubbleCompositeFilter {

    @Field(() => CounterSellerOfferBubbleObjectEqualityInput, {nullable:true})
    equals?: CounterSellerOfferBubbleObjectEqualityInput;

    @Field(() => CounterSellerOfferBubbleWhereInput, {nullable:true})
    is?: CounterSellerOfferBubbleWhereInput;

    @Field(() => CounterSellerOfferBubbleWhereInput, {nullable:true})
    isNot?: CounterSellerOfferBubbleWhereInput;
}
