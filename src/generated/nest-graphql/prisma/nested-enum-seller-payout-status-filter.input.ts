import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerPayoutStatus } from './seller-payout-status.enum';

@InputType()
export class NestedEnumSellerPayoutStatusFilter {

    @Field(() => SellerPayoutStatus, {nullable:true})
    equals?: `${SellerPayoutStatus}`;

    @Field(() => [SellerPayoutStatus], {nullable:true})
    in?: Array<`${SellerPayoutStatus}`>;

    @Field(() => [SellerPayoutStatus], {nullable:true})
    notIn?: Array<`${SellerPayoutStatus}`>;

    @Field(() => NestedEnumSellerPayoutStatusFilter, {nullable:true})
    not?: NestedEnumSellerPayoutStatusFilter;
}
