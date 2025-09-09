import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderPayoutRequestLogWhereInput } from './order-payout-request-log-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class OrderPayoutRequestLogWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [OrderPayoutRequestLogWhereInput], {nullable:true})
    AND?: Array<OrderPayoutRequestLogWhereInput>;

    @Field(() => [OrderPayoutRequestLogWhereInput], {nullable:true})
    OR?: Array<OrderPayoutRequestLogWhereInput>;

    @Field(() => [OrderPayoutRequestLogWhereInput], {nullable:true})
    NOT?: Array<OrderPayoutRequestLogWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    orderId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    valid?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
