import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealMeetupPreferenceObjectEqualityInput } from './deal-meetup-preference-object-equality.input';
import { DealMeetupPreferenceWhereInput } from '../deal-meetup-preference/deal-meetup-preference-where.input';

@InputType()
export class DealMeetupPreferenceCompositeFilter {

    @Field(() => DealMeetupPreferenceObjectEqualityInput, {nullable:true})
    equals?: DealMeetupPreferenceObjectEqualityInput;

    @Field(() => DealMeetupPreferenceWhereInput, {nullable:true})
    is?: DealMeetupPreferenceWhereInput;

    @Field(() => DealMeetupPreferenceWhereInput, {nullable:true})
    isNot?: DealMeetupPreferenceWhereInput;
}
