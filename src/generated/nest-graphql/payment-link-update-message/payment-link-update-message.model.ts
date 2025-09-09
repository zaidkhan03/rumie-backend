import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PaymentLinkStatus } from '../prisma/payment-link-status.enum';

@ObjectType()
export class PaymentLinkUpdateMessage {

    @Field(() => PaymentLinkStatus, {nullable:false})
    status!: `${PaymentLinkStatus}`;

    @Field(() => String, {nullable:false})
    amount!: string;
}
