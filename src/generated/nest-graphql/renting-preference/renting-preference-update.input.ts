import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { RentingPreferenceUpdateavailabilityInput } from './renting-preference-updateavailability.input';

@InputType()
export class RentingPreferenceUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => RentingPreferenceUpdateavailabilityInput, {nullable:true})
    availability?: RentingPreferenceUpdateavailabilityInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressDescription?: NullableStringFieldUpdateOperationsInput;
}
