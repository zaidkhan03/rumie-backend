import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PaymentLinkMessageCreateInput {

    @Field(() => String, {nullable:false})
    mainText!: string;

    @Field(() => String, {nullable:false})
    disclaimerText!: string;

    @Field(() => String, {nullable:false})
    amount!: string;
}
