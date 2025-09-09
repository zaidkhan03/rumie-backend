import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealOfferBubbleObjectEqualityInput } from './deal-offer-bubble-object-equality.input';
import { DealOfferBubbleWhereInput } from '../deal-offer-bubble/deal-offer-bubble-where.input';

@InputType()
export class DealOfferBubbleCompositeFilter {

    @Field(() => DealOfferBubbleObjectEqualityInput, {nullable:true})
    equals?: DealOfferBubbleObjectEqualityInput;

    @Field(() => DealOfferBubbleWhereInput, {nullable:true})
    is?: DealOfferBubbleWhereInput;

    @Field(() => DealOfferBubbleWhereInput, {nullable:true})
    isNot?: DealOfferBubbleWhereInput;
}
