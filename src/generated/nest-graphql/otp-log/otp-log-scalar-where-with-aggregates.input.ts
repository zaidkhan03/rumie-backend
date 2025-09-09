import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class OtpLogScalarWhereWithAggregatesInput {

    @Field(() => [OtpLogScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<OtpLogScalarWhereWithAggregatesInput>;

    @Field(() => [OtpLogScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<OtpLogScalarWhereWithAggregatesInput>;

    @Field(() => [OtpLogScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<OtpLogScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    key?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    otp?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    valid?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
