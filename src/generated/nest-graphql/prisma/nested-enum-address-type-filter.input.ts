import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressType } from './address-type.enum';

@InputType()
export class NestedEnumAddressTypeFilter {

    @Field(() => AddressType, {nullable:true})
    equals?: `${AddressType}`;

    @Field(() => [AddressType], {nullable:true})
    in?: Array<`${AddressType}`>;

    @Field(() => [AddressType], {nullable:true})
    notIn?: Array<`${AddressType}`>;

    @Field(() => NestedEnumAddressTypeFilter, {nullable:true})
    not?: NestedEnumAddressTypeFilter;
}
