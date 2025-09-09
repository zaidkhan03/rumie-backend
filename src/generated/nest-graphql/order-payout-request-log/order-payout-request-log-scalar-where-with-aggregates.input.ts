import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class OrderPayoutRequestLogScalarWhereWithAggregatesInput {

    @Field(() => [OrderPayoutRequestLogScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<OrderPayoutRequestLogScalarWhereWithAggregatesInput>;

    @Field(() => [OrderPayoutRequestLogScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<OrderPayoutRequestLogScalarWhereWithAggregatesInput>;

    @Field(() => [OrderPayoutRequestLogScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<OrderPayoutRequestLogScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    orderId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    valid?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
