import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumSellerPayoutStatusFieldUpdateOperationsInput } from '../prisma/enum-seller-payout-status-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class OrderPayoutUpdateInput {

    @Field(() => EnumSellerPayoutStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumSellerPayoutStatusFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    creditedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    payoutId?: NullableStringFieldUpdateOperationsInput;
}
