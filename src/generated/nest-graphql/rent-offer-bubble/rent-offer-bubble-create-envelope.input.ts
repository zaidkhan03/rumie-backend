import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentOfferBubbleCreateInput } from './rent-offer-bubble-create.input';
import { Type } from 'class-transformer';

@InputType()
export class RentOfferBubbleCreateEnvelopeInput {

    @Field(() => RentOfferBubbleCreateInput, {nullable:true})
    @Type(() => RentOfferBubbleCreateInput)
    set?: RentOfferBubbleCreateInput;
}
