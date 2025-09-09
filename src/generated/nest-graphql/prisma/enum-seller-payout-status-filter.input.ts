import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerPayoutStatus } from './seller-payout-status.enum';
import { NestedEnumSellerPayoutStatusFilter } from './nested-enum-seller-payout-status-filter.input';

@InputType()
export class EnumSellerPayoutStatusFilter {

    @Field(() => SellerPayoutStatus, {nullable:true})
    equals?: `${SellerPayoutStatus}`;

    @Field(() => [SellerPayoutStatus], {nullable:true})
    in?: Array<`${SellerPayoutStatus}`>;

    @Field(() => [SellerPayoutStatus], {nullable:true})
    notIn?: Array<`${SellerPayoutStatus}`>;

    @Field(() => NestedEnumSellerPayoutStatusFilter, {nullable:true})
    not?: NestedEnumSellerPayoutStatusFilter;
}
