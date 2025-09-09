import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CounterSellerOfferBubbleCreateInput } from './counter-seller-offer-bubble-create.input';
import { Type } from 'class-transformer';

@InputType()
export class CounterSellerOfferBubbleCreateEnvelopeInput {

    @Field(() => CounterSellerOfferBubbleCreateInput, {nullable:true})
    @Type(() => CounterSellerOfferBubbleCreateInput)
    set?: CounterSellerOfferBubbleCreateInput;
}
