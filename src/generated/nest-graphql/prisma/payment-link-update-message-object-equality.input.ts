import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentLinkStatus } from './payment-link-status.enum';

@InputType()
export class PaymentLinkUpdateMessageObjectEqualityInput {

    @Field(() => PaymentLinkStatus, {nullable:false})
    status!: `${PaymentLinkStatus}`;

    @Field(() => String, {nullable:false})
    amount!: string;
}
