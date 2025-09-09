import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderPayoutRequestLogWhereUniqueInput } from './order-payout-request-log-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneOrderPayoutRequestLogArgs {

    @Field(() => OrderPayoutRequestLogWhereUniqueInput, {nullable:false})
    @Type(() => OrderPayoutRequestLogWhereUniqueInput)
    where!: Prisma.AtLeast<OrderPayoutRequestLogWhereUniqueInput, 'id'>;
}
