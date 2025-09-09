import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PaymentLinkMessage {

    @Field(() => String, {nullable:false})
    mainText!: string;

    @Field(() => String, {nullable:false})
    disclaimerText!: string;

    @Field(() => String, {nullable:false})
    amount!: string;
}
