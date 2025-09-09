import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtpLogUpdateManyMutationInput } from './otp-log-update-many-mutation.input';
import { Type } from 'class-transformer';
import { OtpLogWhereInput } from './otp-log-where.input';

@ArgsType()
export class UpdateManyOtpLogArgs {

    @Field(() => OtpLogUpdateManyMutationInput, {nullable:false})
    @Type(() => OtpLogUpdateManyMutationInput)
    data!: OtpLogUpdateManyMutationInput;

    @Field(() => OtpLogWhereInput, {nullable:true})
    @Type(() => OtpLogWhereInput)
    where?: OtpLogWhereInput;
}
