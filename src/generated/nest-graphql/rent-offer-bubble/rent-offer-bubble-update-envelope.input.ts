import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentOfferBubbleCreateInput } from './rent-offer-bubble-create.input';
import { Type } from 'class-transformer';
import { RentOfferBubbleUpdateInput } from './rent-offer-bubble-update.input';

@InputType()
export class RentOfferBubbleUpdateEnvelopeInput {

    @Field(() => RentOfferBubbleCreateInput, {nullable:true})
    @Type(() => RentOfferBubbleCreateInput)
    set?: RentOfferBubbleCreateInput;

    @Field(() => RentOfferBubbleUpdateInput, {nullable:true})
    @Type(() => RentOfferBubbleUpdateInput)
    update?: RentOfferBubbleUpdateInput;
}
