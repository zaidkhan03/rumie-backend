import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductBubbleCreateInput } from '../product-bubble/product-bubble-create.input';
import { RentDateTimeCreateInput } from '../rent-date-time/rent-date-time-create.input';

@InputType()
export class RentOfferBubbleCreateInput {

    @Field(() => String, {nullable:false})
    headerText!: string;

    @Field(() => ProductBubbleCreateInput, {nullable:false})
    product!: ProductBubbleCreateInput;

    @Field(() => RentDateTimeCreateInput, {nullable:false})
    start!: RentDateTimeCreateInput;

    @Field(() => RentDateTimeCreateInput, {nullable:false})
    end!: RentDateTimeCreateInput;

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
