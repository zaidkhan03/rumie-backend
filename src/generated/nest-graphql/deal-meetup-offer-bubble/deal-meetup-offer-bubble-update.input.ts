import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DealMeetupPreferenceUpdateEnvelopeInput } from '../deal-meetup-preference/deal-meetup-preference-update-envelope.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';

@InputType()
export class DealMeetupOfferBubbleUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    headerText?: StringFieldUpdateOperationsInput;

    @Field(() => DealMeetupPreferenceUpdateEnvelopeInput, {nullable:true})
    meetupPreference?: DealMeetupPreferenceUpdateEnvelopeInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    offerPrice?: FloatFieldUpdateOperationsInput;
}
