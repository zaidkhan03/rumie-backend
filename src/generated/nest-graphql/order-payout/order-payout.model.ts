import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SellerPayoutStatus } from '../prisma/seller-payout-status.enum';

@ObjectType()
export class OrderPayout {

    @Field(() => SellerPayoutStatus, {nullable:false})
    status!: `${SellerPayoutStatus}`;

    @Field(() => Date, {nullable:true})
    creditedAt!: Date | null;

    @Field(() => String, {nullable:true})
    payoutId!: string | null;
}
