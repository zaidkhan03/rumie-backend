import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class CounterSellerOfferBubbleObjectEqualityInput {

    @Field(() => String, {nullable:false})
    headerText!: string;

    @Field(() => Float, {nullable:false})
    offerPrice!: number;
}
