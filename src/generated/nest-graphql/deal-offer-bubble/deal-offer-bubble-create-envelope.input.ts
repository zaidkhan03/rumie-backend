import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealOfferBubbleCreateInput } from './deal-offer-bubble-create.input';
import { Type } from 'class-transformer';

@InputType()
export class DealOfferBubbleCreateEnvelopeInput {

    @Field(() => DealOfferBubbleCreateInput, {nullable:true})
    @Type(() => DealOfferBubbleCreateInput)
    set?: DealOfferBubbleCreateInput;
}
