import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderPayoutRequestLogWhereInput } from './order-payout-request-log-where.input';
import { Type } from 'class-transformer';
import { OrderPayoutRequestLogOrderByWithRelationInput } from './order-payout-request-log-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { OrderPayoutRequestLogWhereUniqueInput } from './order-payout-request-log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderPayoutRequestLogScalarFieldEnum } from './order-payout-request-log-scalar-field.enum';

@ArgsType()
export class FindFirstOrderPayoutRequestLogOrThrowArgs {

    @Field(() => OrderPayoutRequestLogWhereInput, {nullable:true})
    @Type(() => OrderPayoutRequestLogWhereInput)
    where?: OrderPayoutRequestLogWhereInput;

    @Field(() => [OrderPayoutRequestLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderPayoutRequestLogOrderByWithRelationInput>;

    @Field(() => OrderPayoutRequestLogWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderPayoutRequestLogWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [OrderPayoutRequestLogScalarFieldEnum], {nullable:true})
    distinct?: Array<`${OrderPayoutRequestLogScalarFieldEnum}`>;
}
