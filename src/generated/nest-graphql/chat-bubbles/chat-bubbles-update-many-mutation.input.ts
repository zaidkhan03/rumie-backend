import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductBubbleUpdateEnvelopeInput } from '../product-bubble/product-bubble-update-envelope.input';
import { DealMeetupOfferBubbleUpdateEnvelopeInput } from '../deal-meetup-offer-bubble/deal-meetup-offer-bubble-update-envelope.input';
import { DealOfferBubbleUpdateEnvelopeInput } from '../deal-offer-bubble/deal-offer-bubble-update-envelope.input';
import { CounterSellerOfferBubbleUpdateEnvelopeInput } from '../counter-seller-offer-bubble/counter-seller-offer-bubble-update-envelope.input';
import { RentOfferBubbleUpdateEnvelopeInput } from '../rent-offer-bubble/rent-offer-bubble-update-envelope.input';
import { InfoSystemMessageUpdateEnvelopeInput } from '../info-system-message/info-system-message-update-envelope.input';
import { PaymentConfirmationSystemMessageUpdateEnvelopeInput } from '../payment-confirmation-system-message/payment-confirmation-system-message-update-envelope.input';
import { OrderUpdateSystemMessageUpdateEnvelopeInput } from '../order/order-update-system-message-update-envelope.input';
import { PaymentLinkMessageUpdateEnvelopeInput } from '../payment-link-message/payment-link-message-update-envelope.input';
import { PaymentLinkUpdateMessageUpdateEnvelopeInput } from '../prisma/payment-link-update-message-update-envelope.input';
import { LocalOrderUpdateMessageUpdateEnvelopeInput } from '../prisma/local-order-update-message-update-envelope.input';
import { LocalOrderHandedOverMessageUpdateEnvelopeInput } from '../local-order-handed-over-message/local-order-handed-over-message-update-envelope.input';

@InputType()
export class ChatBubblesUpdateManyMutationInput {

    @Field(() => ProductBubbleUpdateEnvelopeInput, {nullable:true})
    productBubble?: ProductBubbleUpdateEnvelopeInput;

    @Field(() => DealMeetupOfferBubbleUpdateEnvelopeInput, {nullable:true})
    dealMeetupOfferBubble?: DealMeetupOfferBubbleUpdateEnvelopeInput;

    @Field(() => DealOfferBubbleUpdateEnvelopeInput, {nullable:true})
    dealOfferBubble?: DealOfferBubbleUpdateEnvelopeInput;

    @Field(() => CounterSellerOfferBubbleUpdateEnvelopeInput, {nullable:true})
    counterSellerOfferBubble?: CounterSellerOfferBubbleUpdateEnvelopeInput;

    @Field(() => RentOfferBubbleUpdateEnvelopeInput, {nullable:true})
    rentOfferBubble?: RentOfferBubbleUpdateEnvelopeInput;

    @Field(() => InfoSystemMessageUpdateEnvelopeInput, {nullable:true})
    infoSystemMessage?: InfoSystemMessageUpdateEnvelopeInput;

    @Field(() => PaymentConfirmationSystemMessageUpdateEnvelopeInput, {nullable:true})
    paymentConfirationSystemMessage?: PaymentConfirmationSystemMessageUpdateEnvelopeInput;

    @Field(() => OrderUpdateSystemMessageUpdateEnvelopeInput, {nullable:true})
    orderUpdateSystemMessage?: OrderUpdateSystemMessageUpdateEnvelopeInput;

    @Field(() => PaymentLinkMessageUpdateEnvelopeInput, {nullable:true})
    paymentLinkMessage?: PaymentLinkMessageUpdateEnvelopeInput;

    @Field(() => PaymentLinkUpdateMessageUpdateEnvelopeInput, {nullable:true})
    paymentLinkUpdateMessage?: PaymentLinkUpdateMessageUpdateEnvelopeInput;

    @Field(() => LocalOrderUpdateMessageUpdateEnvelopeInput, {nullable:true})
    localOrderUpdateMessage?: LocalOrderUpdateMessageUpdateEnvelopeInput;

    @Field(() => LocalOrderHandedOverMessageUpdateEnvelopeInput, {nullable:true})
    localOrderHandedOverMessage?: LocalOrderHandedOverMessageUpdateEnvelopeInput;
}
