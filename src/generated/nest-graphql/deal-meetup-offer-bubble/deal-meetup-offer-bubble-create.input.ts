import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealMeetupPreferenceCreateInput } from '../deal-meetup-preference/deal-meetup-preference-create.input';
import { Float } from '@nestjs/graphql';

@InputType()
export class DealMeetupOfferBubbleCreateInput {

    @Field(() => String, {nullable:false})
    headerText!: string;

    @Field(() => DealMeetupPreferenceCreateInput, {nullable:false})
    meetupPreference!: DealMeetupPreferenceCreateInput;

    @Field(() => Float, {nullable:false})
    offerPrice!: number;
}
