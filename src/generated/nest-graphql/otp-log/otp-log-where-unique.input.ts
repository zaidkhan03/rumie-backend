import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtpLogWhereInput } from './otp-log-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class OtpLogWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [OtpLogWhereInput], {nullable:true})
    AND?: Array<OtpLogWhereInput>;

    @Field(() => [OtpLogWhereInput], {nullable:true})
    OR?: Array<OtpLogWhereInput>;

    @Field(() => [OtpLogWhereInput], {nullable:true})
    NOT?: Array<OtpLogWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    key?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    otp?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    valid?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
