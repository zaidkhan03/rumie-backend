import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderPayoutRequestLogUpdateManyMutationInput } from './order-payout-request-log-update-many-mutation.input';
import { Type } from 'class-transformer';
import { OrderPayoutRequestLogWhereInput } from './order-payout-request-log-where.input';

@ArgsType()
export class UpdateManyOrderPayoutRequestLogArgs {

    @Field(() => OrderPayoutRequestLogUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderPayoutRequestLogUpdateManyMutationInput)
    data!: OrderPayoutRequestLogUpdateManyMutationInput;

    @Field(() => OrderPayoutRequestLogWhereInput, {nullable:true})
    @Type(() => OrderPayoutRequestLogWhereInput)
    where?: OrderPayoutRequestLogWhereInput;
}
