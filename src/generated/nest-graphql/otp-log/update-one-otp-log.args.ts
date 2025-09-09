import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtpLogUpdateInput } from './otp-log-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OtpLogWhereUniqueInput } from './otp-log-where-unique.input';

@ArgsType()
export class UpdateOneOtpLogArgs {

    @Field(() => OtpLogUpdateInput, {nullable:false})
    @Type(() => OtpLogUpdateInput)
    data!: OtpLogUpdateInput;

    @Field(() => OtpLogWhereUniqueInput, {nullable:false})
    @Type(() => OtpLogWhereUniqueInput)
    where!: Prisma.AtLeast<OtpLogWhereUniqueInput, 'id'>;
}
