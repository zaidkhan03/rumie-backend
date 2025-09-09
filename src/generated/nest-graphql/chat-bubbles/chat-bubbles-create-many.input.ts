import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductBubbleCreateEnvelopeInput } from '../product-bubble/product-bubble-create-envelope.input';
import { DealMeetupOfferBubbleCreateEnvelopeInput } from '../deal-meetup-offer-bubble/deal-meetup-offer-bubble-create-envelope.input';
import { DealOfferBubbleCreateEnvelopeInput } from '../deal-offer-bubble/deal-offer-bubble-create-envelope.input';
import { CounterSellerOfferBubbleCreateEnvelopeInput } from '../counter-seller-offer-bubble/counter-seller-offer-bubble-create-envelope.input';
import { RentOfferBubbleCreateEnvelopeInput } from '../rent-offer-bubble/rent-offer-bubble-create-envelope.input';
import { InfoSystemMessageCreateEnvelopeInput } from '../info-system-message/info-system-message-create-envelope.input';
import { PaymentConfirmationSystemMessageCreateEnvelopeInput } from '../payment-confirmation-system-message/payment-confirmation-system-message-create-envelope.input';
import { OrderUpdateSystemMessageCreateEnvelopeInput } from '../order-update-system-message/order-update-system-message-create-envelope.input';
import { PaymentLinkMessageCreateEnvelopeInput } from '../payment-link-message/payment-link-message-create-envelope.input';
import { PaymentLinkUpdateMessageCreateEnvelopeInput } from '../payment-link-update-message/payment-link-update-message-create-envelope.input';
import { LocalOrderUpdateMessageCreateEnvelopeInput } from '../local-order-update-message/local-order-update-message-create-envelope.input';
import { LocalOrderHandedOverMessageCreateEnvelopeInput } from '../local-order-handed-over-message/local-order-handed-over-message-create-envelope.input';

@InputType()
export class ChatBubblesCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ProductBubbleCreateEnvelopeInput, {nullable:false})
    productBubble!: ProductBubbleCreateEnvelopeInput;

    @Field(() => DealMeetupOfferBubbleCreateEnvelopeInput, {nullable:false})
    dealMeetupOfferBubble!: DealMeetupOfferBubbleCreateEnvelopeInput;

    @Field(() => DealOfferBubbleCreateEnvelopeInput, {nullable:false})
    dealOfferBubble!: DealOfferBubbleCreateEnvelopeInput;

    @Field(() => CounterSellerOfferBubbleCreateEnvelopeInput, {nullable:false})
    counterSellerOfferBubble!: CounterSellerOfferBubbleCreateEnvelopeInput;

    @Field(() => RentOfferBubbleCreateEnvelopeInput, {nullable:false})
    rentOfferBubble!: RentOfferBubbleCreateEnvelopeInput;

    @Field(() => InfoSystemMessageCreateEnvelopeInput, {nullable:false})
    infoSystemMessage!: InfoSystemMessageCreateEnvelopeInput;

    @Field(() => PaymentConfirmationSystemMessageCreateEnvelopeInput, {nullable:false})
    paymentConfirationSystemMessage!: PaymentConfirmationSystemMessageCreateEnvelopeInput;

    @Field(() => OrderUpdateSystemMessageCreateEnvelopeInput, {nullable:false})
    orderUpdateSystemMessage!: OrderUpdateSystemMessageCreateEnvelopeInput;

    @Field(() => PaymentLinkMessageCreateEnvelopeInput, {nullable:false})
    paymentLinkMessage!: PaymentLinkMessageCreateEnvelopeInput;

    @Field(() => PaymentLinkUpdateMessageCreateEnvelopeInput, {nullable:false})
    paymentLinkUpdateMessage!: PaymentLinkUpdateMessageCreateEnvelopeInput;

    @Field(() => LocalOrderUpdateMessageCreateEnvelopeInput, {nullable:false})
    localOrderUpdateMessage!: LocalOrderUpdateMessageCreateEnvelopeInput;

    @Field(() => LocalOrderHandedOverMessageCreateEnvelopeInput, {nullable:false})
    localOrderHandedOverMessage!: LocalOrderHandedOverMessageCreateEnvelopeInput;
}
