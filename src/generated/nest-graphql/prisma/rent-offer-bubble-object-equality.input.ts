import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductBubbleObjectEqualityInput } from './product-bubble-object-equality.input';
import { RentDateTimeObjectEqualityInput } from './rent-date-time-object-equality.input';

@InputType()
export class RentOfferBubbleObjectEqualityInput {

    @Field(() => String, {nullable:false})
    headerText!: string;

    @Field(() => ProductBubbleObjectEqualityInput, {nullable:false})
    product!: ProductBubbleObjectEqualityInput;

    @Field(() => RentDateTimeObjectEqualityInput, {nullable:false})
    start!: RentDateTimeObjectEqualityInput;

    @Field(() => RentDateTimeObjectEqualityInput, {nullable:false})
    end!: RentDateTimeObjectEqualityInput;

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
