import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentWhereInput } from './payment-where.input';
import { EnumGatewayFilter } from '../prisma/enum-gateway-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { OrderNullableRelationFilter } from '../order/order-nullable-relation-filter.input';

@InputType()
export class PaymentWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [PaymentWhereInput], {nullable:true})
    AND?: Array<PaymentWhereInput>;

    @Field(() => [PaymentWhereInput], {nullable:true})
    OR?: Array<PaymentWhereInput>;

    @Field(() => [PaymentWhereInput], {nullable:true})
    NOT?: Array<PaymentWhereInput>;

    @Field(() => EnumGatewayFilter, {nullable:true})
    gateway?: EnumGatewayFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    methodDescription?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    stripePaymentId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => OrderNullableRelationFilter, {nullable:true})
    order?: OrderNullableRelationFilter;
}
