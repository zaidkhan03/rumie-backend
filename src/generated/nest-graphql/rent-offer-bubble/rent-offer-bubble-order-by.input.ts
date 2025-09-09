import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductBubbleOrderByInput } from '../product-bubble/product-bubble-order-by.input';
import { RentDateTimeOrderByInput } from '../rent-date-time/rent-date-time-order-by.input';

@InputType()
export class RentOfferBubbleOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    headerText?: `${SortOrder}`;

    @Field(() => ProductBubbleOrderByInput, {nullable:true})
    product?: ProductBubbleOrderByInput;

    @Field(() => RentDateTimeOrderByInput, {nullable:true})
    start?: RentDateTimeOrderByInput;

    @Field(() => RentDateTimeOrderByInput, {nullable:true})
    end?: RentDateTimeOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    totalPrice?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    buyerFee?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    totalPriceWithBuyerFee?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    consideredWeeks?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    duration?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    deliveryMode?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    address?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    startDateTime?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    endDateTime?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userIdHavingAddress?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    addressIdSelected?: `${SortOrder}`;
}
