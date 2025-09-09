import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CounterSellerOfferBubbleCreateInput } from './counter-seller-offer-bubble-create.input';
import { Type } from 'class-transformer';
import { CounterSellerOfferBubbleUpdateInput } from './counter-seller-offer-bubble-update.input';

@InputType()
export class CounterSellerOfferBubbleUpdateEnvelopeInput {

    @Field(() => CounterSellerOfferBubbleCreateInput, {nullable:true})
    @Type(() => CounterSellerOfferBubbleCreateInput)
    set?: CounterSellerOfferBubbleCreateInput;

    @Field(() => CounterSellerOfferBubbleUpdateInput, {nullable:true})
    @Type(() => CounterSellerOfferBubbleUpdateInput)
    update?: CounterSellerOfferBubbleUpdateInput;
}
