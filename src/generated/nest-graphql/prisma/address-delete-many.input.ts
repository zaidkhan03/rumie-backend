import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereInput } from '../address/address-where.input';
import { Type } from 'class-transformer';

@InputType()
export class AddressDeleteManyInput {

    @Field(() => AddressWhereInput, {nullable:false})
    @Type(() => AddressWhereInput)
    where!: AddressWhereInput;
}
