import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateInput } from '../address/address-create.input';
import { Type } from 'class-transformer';

@InputType()
export class AddressListCreateEnvelopeInput {

    @Field(() => [AddressCreateInput], {nullable:true})
    @Type(() => AddressCreateInput)
    set?: Array<AddressCreateInput>;
}
