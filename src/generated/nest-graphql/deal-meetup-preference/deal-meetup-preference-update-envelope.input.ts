import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealMeetupPreferenceCreateInput } from './deal-meetup-preference-create.input';
import { Type } from 'class-transformer';
import { DealMeetupPreferenceUpdateInput } from './deal-meetup-preference-update.input';

@InputType()
export class DealMeetupPreferenceUpdateEnvelopeInput {

    @Field(() => DealMeetupPreferenceCreateInput, {nullable:true})
    @Type(() => DealMeetupPreferenceCreateInput)
    set?: DealMeetupPreferenceCreateInput;

    @Field(() => DealMeetupPreferenceUpdateInput, {nullable:true})
    @Type(() => DealMeetupPreferenceUpdateInput)
    update?: DealMeetupPreferenceUpdateInput;
}
