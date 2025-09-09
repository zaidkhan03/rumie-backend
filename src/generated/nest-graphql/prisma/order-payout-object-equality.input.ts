import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerPayoutStatus } from './seller-payout-status.enum';

@InputType()
export class OrderPayoutObjectEqualityInput {

    @Field(() => SellerPayoutStatus, {nullable:false})
    status!: `${SellerPayoutStatus}`;

    @Field(() => Date, {nullable:true})
    creditedAt?: Date | string;

    @Field(() => String, {nullable:true})
    payoutId?: string;
}
