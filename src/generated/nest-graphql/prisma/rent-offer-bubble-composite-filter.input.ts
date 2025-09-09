import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentOfferBubbleObjectEqualityInput } from './rent-offer-bubble-object-equality.input';
import { RentOfferBubbleWhereInput } from '../rent-offer-bubble/rent-offer-bubble-where.input';

@InputType()
export class RentOfferBubbleCompositeFilter {

    @Field(() => RentOfferBubbleObjectEqualityInput, {nullable:true})
    equals?: RentOfferBubbleObjectEqualityInput;

    @Field(() => RentOfferBubbleWhereInput, {nullable:true})
    is?: RentOfferBubbleWhereInput;

    @Field(() => RentOfferBubbleWhereInput, {nullable:true})
    isNot?: RentOfferBubbleWhereInput;
}
