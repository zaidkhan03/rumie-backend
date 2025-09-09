import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PayoutRequestLogWhereInput } from './payout-request-log-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPayoutRequestLogArgs {

    @Field(() => PayoutRequestLogWhereInput, {nullable:true})
    @Type(() => PayoutRequestLogWhereInput)
    where?: PayoutRequestLogWhereInput;
}
