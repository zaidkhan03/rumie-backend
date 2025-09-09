import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressObjectEqualityInput } from './address-object-equality.input';
import { AddressWhereInput } from '../address/address-where.input';

@InputType()
export class AddressCompositeListFilter {

    @Field(() => [AddressObjectEqualityInput], {nullable:true})
    equals?: Array<AddressObjectEqualityInput>;

    @Field(() => AddressWhereInput, {nullable:true})
    every?: AddressWhereInput;

    @Field(() => AddressWhereInput, {nullable:true})
    some?: AddressWhereInput;

    @Field(() => AddressWhereInput, {nullable:true})
    none?: AddressWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
