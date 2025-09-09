import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtpLogWhereInput } from './otp-log-where.input';
import { Type } from 'class-transformer';
import { OtpLogOrderByWithAggregationInput } from './otp-log-order-by-with-aggregation.input';
import { OtpLogScalarFieldEnum } from './otp-log-scalar-field.enum';
import { OtpLogScalarWhereWithAggregatesInput } from './otp-log-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { OtpLogCountAggregateInput } from './otp-log-count-aggregate.input';
import { OtpLogMinAggregateInput } from './otp-log-min-aggregate.input';
import { OtpLogMaxAggregateInput } from './otp-log-max-aggregate.input';

@ArgsType()
export class OtpLogGroupByArgs {

    @Field(() => OtpLogWhereInput, {nullable:true})
    @Type(() => OtpLogWhereInput)
    where?: OtpLogWhereInput;

    @Field(() => [OtpLogOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<OtpLogOrderByWithAggregationInput>;

    @Field(() => [OtpLogScalarFieldEnum], {nullable:false})
    by!: Array<`${OtpLogScalarFieldEnum}`>;

    @Field(() => OtpLogScalarWhereWithAggregatesInput, {nullable:true})
    having?: OtpLogScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => OtpLogCountAggregateInput, {nullable:true})
    _count?: OtpLogCountAggregateInput;

    @Field(() => OtpLogMinAggregateInput, {nullable:true})
    _min?: OtpLogMinAggregateInput;

    @Field(() => OtpLogMaxAggregateInput, {nullable:true})
    _max?: OtpLogMaxAggregateInput;
}
