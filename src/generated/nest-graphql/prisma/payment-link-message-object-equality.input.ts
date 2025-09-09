import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PaymentLinkMessageObjectEqualityInput {

    @Field(() => String, {nullable:false})
    mainText!: string;

    @Field(() => String, {nullable:false})
    disclaimerText!: string;

    @Field(() => String, {nullable:false})
    amount!: string;
}
