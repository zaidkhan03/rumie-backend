import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderPayoutRequestLogCreateInput } from './order-payout-request-log-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneOrderPayoutRequestLogArgs {

    @Field(() => OrderPayoutRequestLogCreateInput, {nullable:false})
    @Type(() => OrderPayoutRequestLogCreateInput)
    data!: OrderPayoutRequestLogCreateInput;
}
