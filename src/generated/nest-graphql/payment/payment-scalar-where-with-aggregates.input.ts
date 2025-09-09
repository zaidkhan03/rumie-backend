import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumGatewayWithAggregatesFilter } from '../prisma/enum-gateway-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PaymentScalarWhereWithAggregatesInput {

    @Field(() => [PaymentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PaymentScalarWhereWithAggregatesInput>;

    @Field(() => [PaymentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PaymentScalarWhereWithAggregatesInput>;

    @Field(() => [PaymentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PaymentScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumGatewayWithAggregatesFilter, {nullable:true})
    gateway?: EnumGatewayWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    amount?: FloatWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    methodDescription?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    stripePaymentId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
