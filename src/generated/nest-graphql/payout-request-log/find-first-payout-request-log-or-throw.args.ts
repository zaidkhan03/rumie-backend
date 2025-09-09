import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PayoutRequestLogWhereInput } from './payout-request-log-where.input';
import { Type } from 'class-transformer';
import { PayoutRequestLogOrderByWithRelationInput } from './payout-request-log-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PayoutRequestLogWhereUniqueInput } from './payout-request-log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PayoutRequestLogScalarFieldEnum } from './payout-request-log-scalar-field.enum';

@ArgsType()
export class FindFirstPayoutRequestLogOrThrowArgs {

    @Field(() => PayoutRequestLogWhereInput, {nullable:true})
    @Type(() => PayoutRequestLogWhereInput)
    where?: PayoutRequestLogWhereInput;

    @Field(() => [PayoutRequestLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PayoutRequestLogOrderByWithRelationInput>;

    @Field(() => PayoutRequestLogWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PayoutRequestLogWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PayoutRequestLogScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PayoutRequestLogScalarFieldEnum}`>;
}
