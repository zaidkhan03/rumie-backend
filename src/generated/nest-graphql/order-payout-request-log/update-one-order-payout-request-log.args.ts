import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderPayoutRequestLogUpdateInput } from './order-payout-request-log-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OrderPayoutRequestLogWhereUniqueInput } from './order-payout-request-log-where-unique.input';

@ArgsType()
export class UpdateOneOrderPayoutRequestLogArgs {

    @Field(() => OrderPayoutRequestLogUpdateInput, {nullable:false})
    @Type(() => OrderPayoutRequestLogUpdateInput)
    data!: OrderPayoutRequestLogUpdateInput;

    @Field(() => OrderPayoutRequestLogWhereUniqueInput, {nullable:false})
    @Type(() => OrderPayoutRequestLogWhereUniqueInput)
    where!: Prisma.AtLeast<OrderPayoutRequestLogWhereUniqueInput, 'id'>;
}
