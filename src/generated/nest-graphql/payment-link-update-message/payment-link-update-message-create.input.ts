import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentLinkStatus } from '../prisma/payment-link-status.enum';

@InputType()
export class PaymentLinkUpdateMessageCreateInput {

    @Field(() => PaymentLinkStatus, {nullable:false})
    status!: `${PaymentLinkStatus}`;

    @Field(() => String, {nullable:false})
    amount!: string;
}
