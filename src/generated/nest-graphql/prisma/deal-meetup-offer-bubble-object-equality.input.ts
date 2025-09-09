import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealMeetupPreferenceObjectEqualityInput } from './deal-meetup-preference-object-equality.input';
import { Float } from '@nestjs/graphql';

@InputType()
export class DealMeetupOfferBubbleObjectEqualityInput {

    @Field(() => String, {nullable:false})
    headerText!: string;

    @Field(() => DealMeetupPreferenceObjectEqualityInput, {nullable:false})
    meetupPreference!: DealMeetupPreferenceObjectEqualityInput;

    @Field(() => Float, {nullable:false})
    offerPrice!: number;
}
