import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressObjectEqualityInput } from './address-object-equality.input';
import { AddressWhereInput } from '../address/address-where.input';

@InputType()
export class AddressNullableCompositeFilter {

    @Field(() => AddressObjectEqualityInput, {nullable:true})
    equals?: AddressObjectEqualityInput;

    @Field(() => AddressWhereInput, {nullable:true})
    is?: AddressWhereInput;

    @Field(() => AddressWhereInput, {nullable:true})
    isNot?: AddressWhereInput;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
