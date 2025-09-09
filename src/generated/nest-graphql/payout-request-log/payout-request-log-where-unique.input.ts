import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PayoutRequestLogWhereInput } from './payout-request-log-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PayoutRequestLogWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [PayoutRequestLogWhereInput], {nullable:true})
    AND?: Array<PayoutRequestLogWhereInput>;

    @Field(() => [PayoutRequestLogWhereInput], {nullable:true})
    OR?: Array<PayoutRequestLogWhereInput>;

    @Field(() => [PayoutRequestLogWhereInput], {nullable:true})
    NOT?: Array<PayoutRequestLogWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    valid?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
