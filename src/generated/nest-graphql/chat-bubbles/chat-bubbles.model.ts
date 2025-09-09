import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ProductBubble } from '../product-bubble/product-bubble.model';
import { DealMeetupOfferBubble } from '../deal-meetup-offer-bubble/deal-meetup-offer-bubble.model';
import { DealOfferBubble } from '../deal-offer-bubble/deal-offer-bubble.model';
import { CounterSellerOfferBubble } from '../counter-seller-offer-bubble/counter-seller-offer-bubble.model';
import { RentOfferBubble } from '../rent-offer-bubble/rent-offer-bubble.model';
import { InfoSystemMessage } from '../info-system-message/info-system-message.model';
import { PaymentConfirmationSystemMessage } from '../payment-confirmation-system-message/payment-confirmation-system-message.model';
import { OrderUpdateSystemMessage } from '../order-update-system-message/order-update-system-message.model';
import { PaymentLinkMessage } from '../payment-link-message/payment-link-message.model';
import { PaymentLinkUpdateMessage } from '../payment-link-update-message/payment-link-update-message.model';
import { LocalOrderUpdateMessage } from '../local-order-update-message/local-order-update-message.model';
import { LocalOrderHandedOverMessage } from '../local-order-handed-over-message/local-order-handed-over-message.model';

@ObjectType()
export class ChatBubbles {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => ProductBubble, {nullable:false})
    productBubble?: ProductBubble;

    @Field(() => DealMeetupOfferBubble, {nullable:false})
    dealMeetupOfferBubble?: DealMeetupOfferBubble;

    @Field(() => DealOfferBubble, {nullable:false})
    dealOfferBubble?: DealOfferBubble;

    @Field(() => CounterSellerOfferBubble, {nullable:false})
    counterSellerOfferBubble?: CounterSellerOfferBubble;

    @Field(() => RentOfferBubble, {nullable:false})
    rentOfferBubble?: RentOfferBubble;

    @Field(() => InfoSystemMessage, {nullable:false})
    infoSystemMessage?: InfoSystemMessage;

    @Field(() => PaymentConfirmationSystemMessage, {nullable:false})
    paymentConfirationSystemMessage?: PaymentConfirmationSystemMessage;

    @Field(() => OrderUpdateSystemMessage, {nullable:false})
    orderUpdateSystemMessage?: OrderUpdateSystemMessage;

    @Field(() => PaymentLinkMessage, {nullable:false})
    paymentLinkMessage?: PaymentLinkMessage;

    @Field(() => PaymentLinkUpdateMessage, {nullable:false})
    paymentLinkUpdateMessage?: PaymentLinkUpdateMessage;

    @Field(() => LocalOrderUpdateMessage, {nullable:false})
    localOrderUpdateMessage?: LocalOrderUpdateMessage;

    @Field(() => LocalOrderHandedOverMessage, {nullable:false})
    localOrderHandedOverMessage?: LocalOrderHandedOverMessage;
}
