import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductBubbleOrderByInput } from '../product-bubble/product-bubble-order-by.input';
import { DealMeetupOfferBubbleOrderByInput } from '../deal-meetup-offer-bubble/deal-meetup-offer-bubble-order-by.input';
import { DealOfferBubbleOrderByInput } from '../deal-offer-bubble/deal-offer-bubble-order-by.input';
import { CounterSellerOfferBubbleOrderByInput } from '../counter-seller-offer-bubble/counter-seller-offer-bubble-order-by.input';
import { RentOfferBubbleOrderByInput } from '../rent-offer-bubble/rent-offer-bubble-order-by.input';
import { InfoSystemMessageOrderByInput } from '../info-system-message/info-system-message-order-by.input';
import { PaymentConfirmationSystemMessageOrderByInput } from '../payment-confirmation-system-message/payment-confirmation-system-message-order-by.input';
import { OrderUpdateSystemMessageOrderByInput } from '../order-update-system-message/order-update-system-message-order-by.input';
import { PaymentLinkMessageOrderByInput } from '../payment-link-message/payment-link-message-order-by.input';
import { PaymentLinkUpdateMessageOrderByInput } from '../payment-link-update-message/payment-link-update-message-order-by.input';
import { LocalOrderUpdateMessageOrderByInput } from '../local-order-update-message/local-order-update-message-order-by.input';
import { LocalOrderHandedOverMessageOrderByInput } from '../local-order-handed-over-message/local-order-handed-over-message-order-by.input';

@InputType()
export class ChatBubblesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => ProductBubbleOrderByInput, {nullable:true})
    productBubble?: ProductBubbleOrderByInput;

    @Field(() => DealMeetupOfferBubbleOrderByInput, {nullable:true})
    dealMeetupOfferBubble?: DealMeetupOfferBubbleOrderByInput;

    @Field(() => DealOfferBubbleOrderByInput, {nullable:true})
    dealOfferBubble?: DealOfferBubbleOrderByInput;

    @Field(() => CounterSellerOfferBubbleOrderByInput, {nullable:true})
    counterSellerOfferBubble?: CounterSellerOfferBubbleOrderByInput;

    @Field(() => RentOfferBubbleOrderByInput, {nullable:true})
    rentOfferBubble?: RentOfferBubbleOrderByInput;

    @Field(() => InfoSystemMessageOrderByInput, {nullable:true})
    infoSystemMessage?: InfoSystemMessageOrderByInput;

    @Field(() => PaymentConfirmationSystemMessageOrderByInput, {nullable:true})
    paymentConfirationSystemMessage?: PaymentConfirmationSystemMessageOrderByInput;

    @Field(() => OrderUpdateSystemMessageOrderByInput, {nullable:true})
    orderUpdateSystemMessage?: OrderUpdateSystemMessageOrderByInput;

    @Field(() => PaymentLinkMessageOrderByInput, {nullable:true})
    paymentLinkMessage?: PaymentLinkMessageOrderByInput;

    @Field(() => PaymentLinkUpdateMessageOrderByInput, {nullable:true})
    paymentLinkUpdateMessage?: PaymentLinkUpdateMessageOrderByInput;

    @Field(() => LocalOrderUpdateMessageOrderByInput, {nullable:true})
    localOrderUpdateMessage?: LocalOrderUpdateMessageOrderByInput;

    @Field(() => LocalOrderHandedOverMessageOrderByInput, {nullable:true})
    localOrderHandedOverMessage?: LocalOrderHandedOverMessageOrderByInput;
}
