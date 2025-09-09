import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerPayoutStatus } from './seller-payout-status.enum';

@InputType()
export class EnumSellerPayoutStatusFieldUpdateOperationsInput {

    @Field(() => SellerPayoutStatus, {nullable:true})
    set?: `${SellerPayoutStatus}`;
}
