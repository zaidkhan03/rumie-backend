import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DealMeetupPreference } from '../deal-meetup-preference/deal-meetup-preference.model';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class DealMeetupOfferBubble {

    @Field(() => String, {nullable:false})
    headerText!: string;

    @Field(() => DealMeetupPreference, {nullable:false})
    meetupPreference?: DealMeetupPreference;

    @Field(() => Float, {nullable:false})
    offerPrice!: number;
}
