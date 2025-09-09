import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderPayoutRequestLogWhereUniqueInput } from './order-payout-request-log-where-unique.input';
import { Type } from 'class-transformer';
import { OrderPayoutRequestLogCreateInput } from './order-payout-request-log-create.input';
import { OrderPayoutRequestLogUpdateInput } from './order-payout-request-log-update.input';

@ArgsType()
export class UpsertOneOrderPayoutRequestLogArgs {

    @Field(() => OrderPayoutRequestLogWhereUniqueInput, {nullable:false})
    @Type(() => OrderPayoutRequestLogWhereUniqueInput)
    where!: Prisma.AtLeast<OrderPayoutRequestLogWhereUniqueInput, 'id'>;

    @Field(() => OrderPayoutRequestLogCreateInput, {nullable:false})
    @Type(() => OrderPayoutRequestLogCreateInput)
    create!: OrderPayoutRequestLogCreateInput;

    @Field(() => OrderPayoutRequestLogUpdateInput, {nullable:false})
    @Type(() => OrderPayoutRequestLogUpdateInput)
    update!: OrderPayoutRequestLogUpdateInput;
}
