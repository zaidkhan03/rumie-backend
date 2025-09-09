import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtpLogCreateInput } from './otp-log-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneOtpLogArgs {

    @Field(() => OtpLogCreateInput, {nullable:false})
    @Type(() => OtpLogCreateInput)
    data!: OtpLogCreateInput;
}
