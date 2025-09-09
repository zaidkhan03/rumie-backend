import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressType } from '../prisma/address-type.enum';

@InputType()
export class AddressCreateInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phoneNo!: string;

    @Field(() => String, {nullable:false})
    address1!: string;

    @Field(() => String, {nullable:true})
    address2?: string;

    @Field(() => String, {nullable:false})
    zip!: string;

    @Field(() => String, {nullable:false})
    state!: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:false})
    country!: string;

    @Field(() => AddressType, {nullable:false})
    addressType!: `${AddressType}`;
}
