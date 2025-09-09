import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderPayoutCreateInput } from './order-payout-create.input';
import { Type } from 'class-transformer';
import { OrderPayoutUpdateInput } from './order-payout-update.input';

@InputType()
export class OrderPayoutUpdateEnvelopeInput {

    @Field(() => OrderPayoutCreateInput, {nullable:true})
    @Type(() => OrderPayoutCreateInput)
    set?: OrderPayoutCreateInput;

    @Field(() => OrderPayoutUpdateInput, {nullable:true})
    @Type(() => OrderPayoutUpdateInput)
    update?: OrderPayoutUpdateInput;
}
