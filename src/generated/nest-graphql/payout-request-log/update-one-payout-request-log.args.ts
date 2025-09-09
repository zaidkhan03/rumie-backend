import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PayoutRequestLogUpdateInput } from './payout-request-log-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PayoutRequestLogWhereUniqueInput } from './payout-request-log-where-unique.input';

@ArgsType()
export class UpdateOnePayoutRequestLogArgs {

    @Field(() => PayoutRequestLogUpdateInput, {nullable:false})
    @Type(() => PayoutRequestLogUpdateInput)
    data!: PayoutRequestLogUpdateInput;

    @Field(() => PayoutRequestLogWhereUniqueInput, {nullable:false})
    @Type(() => PayoutRequestLogWhereUniqueInput)
    where!: Prisma.AtLeast<PayoutRequestLogWhereUniqueInput, 'id'>;
}
