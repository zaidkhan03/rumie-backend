import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DealMeetupPreferenceOrderByInput } from '../deal-meetup-preference/deal-meetup-preference-order-by.input';

@InputType()
export class DealMeetupOfferBubbleOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    headerText?: `${SortOrder}`;

    @Field(() => DealMeetupPreferenceOrderByInput, {nullable:true})
    meetupPreference?: DealMeetupPreferenceOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    offerPrice?: `${SortOrder}`;
}
