import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OtpLogWhereUniqueInput } from './otp-log-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueOtpLogArgs {

    @Field(() => OtpLogWhereUniqueInput, {nullable:false})
    @Type(() => OtpLogWhereUniqueInput)
    where!: Prisma.AtLeast<OtpLogWhereUniqueInput, 'id'>;
}
