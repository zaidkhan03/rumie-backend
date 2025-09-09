import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumSellerPayoutStatusFilter } from '../prisma/enum-seller-payout-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class OrderPayoutWhereInput {

    @Field(() => [OrderPayoutWhereInput], {nullable:true})
    AND?: Array<OrderPayoutWhereInput>;

    @Field(() => [OrderPayoutWhereInput], {nullable:true})
    OR?: Array<OrderPayoutWhereInput>;

    @Field(() => [OrderPayoutWhereInput], {nullable:true})
    NOT?: Array<OrderPayoutWhereInput>;

    @Field(() => EnumSellerPayoutStatusFilter, {nullable:true})
    status?: EnumSellerPayoutStatusFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    creditedAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    payoutId?: StringNullableFilter;
}
