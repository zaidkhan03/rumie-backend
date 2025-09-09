import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderPayoutRequestLogCreateManyInput } from './order-payout-request-log-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyOrderPayoutRequestLogArgs {

    @Field(() => [OrderPayoutRequestLogCreateManyInput], {nullable:false})
    @Type(() => OrderPayoutRequestLogCreateManyInput)
    data!: Array<OrderPayoutRequestLogCreateManyInput>;
}
