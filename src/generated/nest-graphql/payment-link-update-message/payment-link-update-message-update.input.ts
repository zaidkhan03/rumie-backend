import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumPaymentLinkStatusFieldUpdateOperationsInput } from '../prisma/enum-payment-link-status-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class PaymentLinkUpdateMessageUpdateInput {

    @Field(() => EnumPaymentLinkStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumPaymentLinkStatusFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    amount?: StringFieldUpdateOperationsInput;
}
