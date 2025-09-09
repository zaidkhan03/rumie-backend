import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtpLogWhereInput } from './otp-log-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyOtpLogArgs {

    @Field(() => OtpLogWhereInput, {nullable:true})
    @Type(() => OtpLogWhereInput)
    where?: OtpLogWhereInput;
}
