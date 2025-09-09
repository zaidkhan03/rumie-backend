import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PayoutRequestLogWhereUniqueInput } from './payout-request-log-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnePayoutRequestLogArgs {

    @Field(() => PayoutRequestLogWhereUniqueInput, {nullable:false})
    @Type(() => PayoutRequestLogWhereUniqueInput)
    where!: Prisma.AtLeast<PayoutRequestLogWhereUniqueInput, 'id'>;
}
