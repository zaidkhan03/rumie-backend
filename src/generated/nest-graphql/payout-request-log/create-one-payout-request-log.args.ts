import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PayoutRequestLogCreateInput } from './payout-request-log-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePayoutRequestLogArgs {

    @Field(() => PayoutRequestLogCreateInput, {nullable:false})
    @Type(() => PayoutRequestLogCreateInput)
    data!: PayoutRequestLogCreateInput;
}
