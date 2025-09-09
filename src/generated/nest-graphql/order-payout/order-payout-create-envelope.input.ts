import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderPayoutCreateInput } from './order-payout-create.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderPayoutCreateEnvelopeInput {

    @Field(() => OrderPayoutCreateInput, {nullable:true})
    @Type(() => OrderPayoutCreateInput)
    set?: OrderPayoutCreateInput;
}
