import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PayoutRequestLogUpdateManyMutationInput } from './payout-request-log-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PayoutRequestLogWhereInput } from './payout-request-log-where.input';

@ArgsType()
export class UpdateManyPayoutRequestLogArgs {

    @Field(() => PayoutRequestLogUpdateManyMutationInput, {nullable:false})
    @Type(() => PayoutRequestLogUpdateManyMutationInput)
    data!: PayoutRequestLogUpdateManyMutationInput;

    @Field(() => PayoutRequestLogWhereInput, {nullable:true})
    @Type(() => PayoutRequestLogWhereInput)
    where?: PayoutRequestLogWhereInput;
}
