import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class DealMeetupPreferenceWhereInput {

    @Field(() => [DealMeetupPreferenceWhereInput], {nullable:true})
    AND?: Array<DealMeetupPreferenceWhereInput>;

    @Field(() => [DealMeetupPreferenceWhereInput], {nullable:true})
    OR?: Array<DealMeetupPreferenceWhereInput>;

    @Field(() => [DealMeetupPreferenceWhereInput], {nullable:true})
    NOT?: Array<DealMeetupPreferenceWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    days?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    time?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    location?: StringFilter;
}
