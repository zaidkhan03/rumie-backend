import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentingPreferenceCreateInput } from '../renting-preference/renting-preference-create.input';
import { Type } from 'class-transformer';

@InputType()
export class RentingPreferenceNullableCreateEnvelopeInput {

    @Field(() => RentingPreferenceCreateInput, {nullable:true})
    @Type(() => RentingPreferenceCreateInput)
    set?: RentingPreferenceCreateInput;
}
