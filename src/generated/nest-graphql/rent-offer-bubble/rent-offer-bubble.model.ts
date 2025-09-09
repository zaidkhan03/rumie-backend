import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductBubble } from '../product-bubble/product-bubble.model';
import { RentDateTime } from '../rent-date-time/rent-date-time.model';

@ObjectType()
export class RentOfferBubble {

    @Field(() => String, {nullable:false})
    headerText!: string;

    @Field(() => ProductBubble, {nullable:false})
    product?: ProductBubble;

    @Field(() => RentDateTime, {nullable:false})
    start?: RentDateTime;

    @Field(() => RentDateTime, {nullable:false})
    end?: RentDateTime;

    @Field(() => String, {nullable:false})
    totalPrice!: string;

    @Field(() => String, {nullable:false})
    buyerFee!: string;

    @Field(() => String, {nullable:false})
    totalPriceWithBuyerFee!: string;

    @Field(() => String, {nullable:false})
    consideredWeeks!: string;

    @Field(() => String, {nullable:false})
    duration!: string;

    @Field(() => String, {nullable:false})
    deliveryMode!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    startDateTime!: string;

    @Field(() => String, {nullable:false})
    endDateTime!: string;

    @Field(() => String, {nullable:false})
    userIdHavingAddress!: string;

    @Field(() => String, {nullable:false})
    addressIdSelected!: string;
}
