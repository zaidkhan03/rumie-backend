import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressType } from './address-type.enum';

@InputType()
export class EnumAddressTypeFieldUpdateOperationsInput {

    @Field(() => AddressType, {nullable:true})
    set?: `${AddressType}`;
}
