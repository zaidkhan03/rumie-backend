import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderPayoutRequestLogWhereInput } from './order-payout-request-log-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyOrderPayoutRequestLogArgs {

    @Field(() => OrderPayoutRequestLogWhereInput, {nullable:true})
    @Type(() => OrderPayoutRequestLogWhereInput)
    where?: OrderPayoutRequestLogWhereInput;
}
