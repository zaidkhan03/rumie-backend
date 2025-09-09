import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentLinkStatus } from './payment-link-status.enum';

@InputType()
export class EnumPaymentLinkStatusFieldUpdateOperationsInput {

    @Field(() => PaymentLinkStatus, {nullable:true})
    set?: `${PaymentLinkStatus}`;
}
