import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentingPreferenceObjectEqualityInput } from './renting-preference-object-equality.input';
import { RentingPreferenceWhereInput } from '../renting-preference/renting-preference-where.input';

@InputType()
export class RentingPreferenceNullableCompositeFilter {

    @Field(() => RentingPreferenceObjectEqualityInput, {nullable:true})
    equals?: RentingPreferenceObjectEqualityInput;

    @Field(() => RentingPreferenceWhereInput, {nullable:true})
    is?: RentingPreferenceWhereInput;

    @Field(() => RentingPreferenceWhereInput, {nullable:true})
    isNot?: RentingPreferenceWhereInput;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
