import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentingPreferenceCreateavailabilityInput } from './renting-preference-createavailability.input';

@InputType()
export class RentingPreferenceCreateInput {

    @Field(() => String, {nullable:true})
    addressId?: string;

    @Field(() => RentingPreferenceCreateavailabilityInput, {nullable:true})
    availability?: RentingPreferenceCreateavailabilityInput;

    @Field(() => String, {nullable:true})
    addressDescription?: string;
}
