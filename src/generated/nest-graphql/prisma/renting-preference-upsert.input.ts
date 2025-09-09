import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentingPreferenceCreateInput } from '../renting-preference/renting-preference-create.input';
import { Type } from 'class-transformer';
import { RentingPreferenceUpdateInput } from '../renting-preference/renting-preference-update.input';

@InputType()
export class RentingPreferenceUpsertInput {

    @Field(() => RentingPreferenceCreateInput, {nullable:false})
    @Type(() => RentingPreferenceCreateInput)
    set!: RentingPreferenceCreateInput;

    @Field(() => RentingPreferenceUpdateInput, {nullable:false})
    @Type(() => RentingPreferenceUpdateInput)
    update!: RentingPreferenceUpdateInput;
}
