import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PayoutRequestLogWhereUniqueInput } from './payout-request-log-where-unique.input';
import { Type } from 'class-transformer';
import { PayoutRequestLogCreateInput } from './payout-request-log-create.input';
import { PayoutRequestLogUpdateInput } from './payout-request-log-update.input';

@ArgsType()
export class UpsertOnePayoutRequestLogArgs {

    @Field(() => PayoutRequestLogWhereUniqueInput, {nullable:false})
    @Type(() => PayoutRequestLogWhereUniqueInput)
    where!: Prisma.AtLeast<PayoutRequestLogWhereUniqueInput, 'id'>;

    @Field(() => PayoutRequestLogCreateInput, {nullable:false})
    @Type(() => PayoutRequestLogCreateInput)
    create!: PayoutRequestLogCreateInput;

    @Field(() => PayoutRequestLogUpdateInput, {nullable:false})
    @Type(() => PayoutRequestLogUpdateInput)
    update!: PayoutRequestLogUpdateInput;
}
