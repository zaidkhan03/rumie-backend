import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateInput } from '../address/address-create.input';
import { Type } from 'class-transformer';
import { AddressUpdateInput } from '../address/address-update.input';

@InputType()
export class AddressUpsertInput {

    @Field(() => AddressCreateInput, {nullable:false})
    @Type(() => AddressCreateInput)
    set!: AddressCreateInput;

    @Field(() => AddressUpdateInput, {nullable:false})
    @Type(() => AddressUpdateInput)
    update!: AddressUpdateInput;
}
