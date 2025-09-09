import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';
import { Type } from 'class-transformer';
import { AddressUpdateInput } from './address-update.input';

@InputType()
export class AddressUpdateManyInput {

    @Field(() => AddressWhereInput, {nullable:false})
    @Type(() => AddressWhereInput)
    where!: AddressWhereInput;

    @Field(() => AddressUpdateInput, {nullable:false})
    @Type(() => AddressUpdateInput)
    data!: AddressUpdateInput;
}
