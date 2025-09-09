import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealMeetupOfferBubbleCreateInput } from './deal-meetup-offer-bubble-create.input';
import { Type } from 'class-transformer';
import { DealMeetupOfferBubbleUpdateInput } from './deal-meetup-offer-bubble-update.input';

@InputType()
export class DealMeetupOfferBubbleUpdateEnvelopeInput {

    @Field(() => DealMeetupOfferBubbleCreateInput, {nullable:true})
    @Type(() => DealMeetupOfferBubbleCreateInput)
    set?: DealMeetupOfferBubbleCreateInput;

    @Field(() => DealMeetupOfferBubbleUpdateInput, {nullable:true})
    @Type(() => DealMeetupOfferBubbleUpdateInput)
    update?: DealMeetupOfferBubbleUpdateInput;
}
