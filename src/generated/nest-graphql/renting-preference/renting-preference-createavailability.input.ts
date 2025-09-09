import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Availability } from '../prisma/availability.enum';

@InputType()
export class RentingPreferenceCreateavailabilityInput {

    @Field(() => [Availability], {nullable:false})
    set!: Array<`${Availability}`>;
}
