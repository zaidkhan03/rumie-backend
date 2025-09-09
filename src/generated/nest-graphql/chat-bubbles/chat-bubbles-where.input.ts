import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ProductBubbleCompositeFilter } from '../prisma/product-bubble-composite-filter.input';
import { DealMeetupOfferBubbleCompositeFilter } from '../prisma/deal-meetup-offer-bubble-composite-filter.input';
import { DealOfferBubbleCompositeFilter } from '../prisma/deal-offer-bubble-composite-filter.input';
import { CounterSellerOfferBubbleCompositeFilter } from '../prisma/counter-seller-offer-bubble-composite-filter.input';
import { RentOfferBubbleCompositeFilter } from '../prisma/rent-offer-bubble-composite-filter.input';
import { InfoSystemMessageCompositeFilter } from '../prisma/info-system-message-composite-filter.input';
import { PaymentConfirmationSystemMessageCompositeFilter } from '../prisma/payment-confirmation-system-message-composite-filter.input';
import { OrderUpdateSystemMessageCompositeFilter } from '../order/order-update-system-message-composite-filter.input';
import { PaymentLinkMessageCompositeFilter } from '../prisma/payment-link-message-composite-filter.input';
import { PaymentLinkUpdateMessageCompositeFilter } from '../prisma/payment-link-update-message-composite-filter.input';
import { LocalOrderUpdateMessageCompositeFilter } from '../prisma/local-order-update-message-composite-filter.input';
import { LocalOrderHandedOverMessageCompositeFilter } from '../prisma/local-order-handed-over-message-composite-filter.input';

@InputType()
export class ChatBubblesWhereInput {

    @Field(() => [ChatBubblesWhereInput], {nullable:true})
    AND?: Array<ChatBubblesWhereInput>;

    @Field(() => [ChatBubblesWhereInput], {nullable:true})
    OR?: Array<ChatBubblesWhereInput>;

    @Field(() => [ChatBubblesWhereInput], {nullable:true})
    NOT?: Array<ChatBubblesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => ProductBubbleCompositeFilter, {nullable:true})
    productBubble?: ProductBubbleCompositeFilter;

    @Field(() => DealMeetupOfferBubbleCompositeFilter, {nullable:true})
    dealMeetupOfferBubble?: DealMeetupOfferBubbleCompositeFilter;

    @Field(() => DealOfferBubbleCompositeFilter, {nullable:true})
    dealOfferBubble?: DealOfferBubbleCompositeFilter;

    @Field(() => CounterSellerOfferBubbleCompositeFilter, {nullable:true})
    counterSellerOfferBubble?: CounterSellerOfferBubbleCompositeFilter;

    @Field(() => RentOfferBubbleCompositeFilter, {nullable:true})
    rentOfferBubble?: RentOfferBubbleCompositeFilter;

    @Field(() => InfoSystemMessageCompositeFilter, {nullable:true})
    infoSystemMessage?: InfoSystemMessageCompositeFilter;

    @Field(() => PaymentConfirmationSystemMessageCompositeFilter, {nullable:true})
    paymentConfirationSystemMessage?: PaymentConfirmationSystemMessageCompositeFilter;

    @Field(() => OrderUpdateSystemMessageCompositeFilter, {nullable:true})
    orderUpdateSystemMessage?: OrderUpdateSystemMessageCompositeFilter;

    @Field(() => PaymentLinkMessageCompositeFilter, {nullable:true})
    paymentLinkMessage?: PaymentLinkMessageCompositeFilter;

    @Field(() => PaymentLinkUpdateMessageCompositeFilter, {nullable:true})
    paymentLinkUpdateMessage?: PaymentLinkUpdateMessageCompositeFilter;

    @Field(() => LocalOrderUpdateMessageCompositeFilter, {nullable:true})
    localOrderUpdateMessage?: LocalOrderUpdateMessageCompositeFilter;

    @Field(() => LocalOrderHandedOverMessageCompositeFilter, {nullable:true})
    localOrderHandedOverMessage?: LocalOrderHandedOverMessageCompositeFilter;
}
