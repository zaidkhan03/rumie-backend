import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PayoutRequestLogCreateManyInput } from './payout-request-log-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPayoutRequestLogArgs {

    @Field(() => [PayoutRequestLogCreateManyInput], {nullable:false})
    @Type(() => PayoutRequestLogCreateManyInput)
    data!: Array<PayoutRequestLogCreateManyInput>;
}
