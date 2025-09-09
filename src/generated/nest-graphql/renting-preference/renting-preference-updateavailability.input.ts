import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Availability } from '../prisma/availability.enum';

@InputType()
export class RentingPreferenceUpdateavailabilityInput {

    @Field(() => [Availability], {nullable:true})
    set?: Array<`${Availability}`>;

    @Field(() => [Availability], {nullable:true})
    push?: Array<`${Availability}`>;
}
