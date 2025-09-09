import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DealMeetupPreferenceCompositeFilter } from '../prisma/deal-meetup-preference-composite-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';

@InputType()
export class DealMeetupOfferBubbleWhereInput {

    @Field(() => [DealMeetupOfferBubbleWhereInput], {nullable:true})
    AND?: Array<DealMeetupOfferBubbleWhereInput>;

    @Field(() => [DealMeetupOfferBubbleWhereInput], {nullable:true})
    OR?: Array<DealMeetupOfferBubbleWhereInput>;

    @Field(() => [DealMeetupOfferBubbleWhereInput], {nullable:true})
    NOT?: Array<DealMeetupOfferBubbleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    headerText?: StringFilter;

    @Field(() => DealMeetupPreferenceCompositeFilter, {nullable:true})
    meetupPreference?: DealMeetupPreferenceCompositeFilter;

    @Field(() => FloatFilter, {nullable:true})
    offerPrice?: FloatFilter;
}
