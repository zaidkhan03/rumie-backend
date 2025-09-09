import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentOrderCreateInput } from '../rent-order/rent-order-create.input';
import { Type } from 'class-transformer';
import { RentOrderUpdateInput } from '../rent-order/rent-order-update.input';

@InputType()
export class RentOrderUpsertInput {

    @Field(() => RentOrderCreateInput, {nullable:false})
    @Type(() => RentOrderCreateInput)
    set!: RentOrderCreateInput;

    @Field(() => RentOrderUpdateInput, {nullable:false})
    @Type(() => RentOrderUpdateInput)
    update!: RentOrderUpdateInput;
}
