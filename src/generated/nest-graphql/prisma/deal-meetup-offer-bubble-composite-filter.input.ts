import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealMeetupOfferBubbleObjectEqualityInput } from './deal-meetup-offer-bubble-object-equality.input';
import { DealMeetupOfferBubbleWhereInput } from '../deal-meetup-offer-bubble/deal-meetup-offer-bubble-where.input';

@InputType()
export class DealMeetupOfferBubbleCompositeFilter {

    @Field(() => DealMeetupOfferBubbleObjectEqualityInput, {nullable:true})
    equals?: DealMeetupOfferBubbleObjectEqualityInput;

    @Field(() => DealMeetupOfferBubbleWhereInput, {nullable:true})
    is?: DealMeetupOfferBubbleWhereInput;

    @Field(() => DealMeetupOfferBubbleWhereInput, {nullable:true})
    isNot?: DealMeetupOfferBubbleWhereInput;
}
