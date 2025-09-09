import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtpLogCreateManyInput } from './otp-log-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyOtpLogArgs {

    @Field(() => [OtpLogCreateManyInput], {nullable:false})
    @Type(() => OtpLogCreateManyInput)
    data!: Array<OtpLogCreateManyInput>;
}
