import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateInput } from '../address/address-create.input';
import { Type } from 'class-transformer';
import { AddressUpsertInput } from './address-upsert.input';

@InputType()
export class AddressNullableUpdateEnvelopeInput {

    @Field(() => AddressCreateInput, {nullable:true})
    @Type(() => AddressCreateInput)
    set?: AddressCreateInput;

    @Field(() => AddressUpsertInput, {nullable:true})
    @Type(() => AddressUpsertInput)
    upsert?: AddressUpsertInput;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
