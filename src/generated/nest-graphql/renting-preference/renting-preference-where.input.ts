import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumAvailabilityNullableListFilter } from '../prisma/enum-availability-nullable-list-filter.input';

@InputType()
export class RentingPreferenceWhereInput {

    @Field(() => [RentingPreferenceWhereInput], {nullable:true})
    AND?: Array<RentingPreferenceWhereInput>;

    @Field(() => [RentingPreferenceWhereInput], {nullable:true})
    OR?: Array<RentingPreferenceWhereInput>;

    @Field(() => [RentingPreferenceWhereInput], {nullable:true})
    NOT?: Array<RentingPreferenceWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    addressId?: StringNullableFilter;

    @Field(() => EnumAvailabilityNullableListFilter, {nullable:true})
    availability?: EnumAvailabilityNullableListFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    addressDescription?: StringNullableFilter;
}
