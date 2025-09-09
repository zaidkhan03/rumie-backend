import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Availability } from './availability.enum';

@InputType()
export class RentingPreferenceObjectEqualityInput {

    @Field(() => String, {nullable:true})
    addressId?: string;

    @Field(() => [Availability], {nullable:true})
    availability?: Array<`${Availability}`>;

    @Field(() => String, {nullable:true})
    addressDescription?: string;
}
