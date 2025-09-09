import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentingPreferenceCreateInput } from '../renting-preference/renting-preference-create.input';
import { Type } from 'class-transformer';
import { RentingPreferenceUpsertInput } from './renting-preference-upsert.input';

@InputType()
export class RentingPreferenceNullableUpdateEnvelopeInput {

    @Field(() => RentingPreferenceCreateInput, {nullable:true})
    @Type(() => RentingPreferenceCreateInput)
    set?: RentingPreferenceCreateInput;

    @Field(() => RentingPreferenceUpsertInput, {nullable:true})
    @Type(() => RentingPreferenceUpsertInput)
    upsert?: RentingPreferenceUpsertInput;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
