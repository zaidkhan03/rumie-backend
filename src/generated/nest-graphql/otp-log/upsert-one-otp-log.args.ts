import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OtpLogWhereUniqueInput } from './otp-log-where-unique.input';
import { Type } from 'class-transformer';
import { OtpLogCreateInput } from './otp-log-create.input';
import { OtpLogUpdateInput } from './otp-log-update.input';

@ArgsType()
export class UpsertOneOtpLogArgs {

    @Field(() => OtpLogWhereUniqueInput, {nullable:false})
    @Type(() => OtpLogWhereUniqueInput)
    where!: Prisma.AtLeast<OtpLogWhereUniqueInput, 'id'>;

    @Field(() => OtpLogCreateInput, {nullable:false})
    @Type(() => OtpLogCreateInput)
    create!: OtpLogCreateInput;

    @Field(() => OtpLogUpdateInput, {nullable:false})
    @Type(() => OtpLogUpdateInput)
    update!: OtpLogUpdateInput;
}
