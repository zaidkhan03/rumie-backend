import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealMeetupOfferBubbleCreateInput } from './deal-meetup-offer-bubble-create.input';
import { Type } from 'class-transformer';

@InputType()
export class DealMeetupOfferBubbleCreateEnvelopeInput {

    @Field(() => DealMeetupOfferBubbleCreateInput, {nullable:true})
    @Type(() => DealMeetupOfferBubbleCreateInput)
    set?: DealMeetupOfferBubbleCreateInput;
}
