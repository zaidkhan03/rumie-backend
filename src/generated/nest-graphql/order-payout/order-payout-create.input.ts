import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerPayoutStatus } from '../prisma/seller-payout-status.enum';

@InputType()
export class OrderPayoutCreateInput {

    @Field(() => SellerPayoutStatus, {nullable:false})
    status!: `${SellerPayoutStatus}`;

    @Field(() => Date, {nullable:true})
    creditedAt?: Date | string;

    @Field(() => String, {nullable:true})
    payoutId?: string;
}
