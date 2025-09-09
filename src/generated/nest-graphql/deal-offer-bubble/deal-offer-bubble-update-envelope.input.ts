import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealOfferBubbleCreateInput } from './deal-offer-bubble-create.input';
import { Type } from 'class-transformer';
import { DealOfferBubbleUpdateInput } from './deal-offer-bubble-update.input';

@InputType()
export class DealOfferBubbleUpdateEnvelopeInput {

    @Field(() => DealOfferBubbleCreateInput, {nullable:true})
    @Type(() => DealOfferBubbleCreateInput)
    set?: DealOfferBubbleCreateInput;

    @Field(() => DealOfferBubbleUpdateInput, {nullable:true})
    @Type(() => DealOfferBubbleUpdateInput)
    update?: DealOfferBubbleUpdateInput;
}
