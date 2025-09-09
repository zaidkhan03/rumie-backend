import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateInput } from '../address/address-create.input';
import { Type } from 'class-transformer';
import { AddressUpdateManyInput } from '../address/address-update-many.input';
import { AddressDeleteManyInput } from './address-delete-many.input';

@InputType()
export class AddressListUpdateEnvelopeInput {

    @Field(() => [AddressCreateInput], {nullable:true})
    @Type(() => AddressCreateInput)
    set?: Array<AddressCreateInput>;

    @Field(() => [AddressCreateInput], {nullable:true})
    push?: Array<AddressCreateInput>;

    @Field(() => AddressUpdateManyInput, {nullable:true})
    @Type(() => AddressUpdateManyInput)
    updateMany?: AddressUpdateManyInput;

    @Field(() => AddressDeleteManyInput, {nullable:true})
    @Type(() => AddressDeleteManyInput)
    deleteMany?: AddressDeleteManyInput;
}
