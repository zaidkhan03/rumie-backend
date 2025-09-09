import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DealMeetupPreferenceObjectEqualityInput {

    @Field(() => String, {nullable:false})
    days!: string;

    @Field(() => String, {nullable:false})
    time!: string;

    @Field(() => String, {nullable:false})
    location!: string;
}
