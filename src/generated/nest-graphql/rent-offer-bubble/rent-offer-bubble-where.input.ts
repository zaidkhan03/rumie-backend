import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ProductBubbleCompositeFilter } from '../prisma/product-bubble-composite-filter.input';
import { RentDateTimeCompositeFilter } from '../prisma/rent-date-time-composite-filter.input';

@InputType()
export class RentOfferBubbleWhereInput {

    @Field(() => [RentOfferBubbleWhereInput], {nullable:true})
    AND?: Array<RentOfferBubbleWhereInput>;

    @Field(() => [RentOfferBubbleWhereInput], {nullable:true})
    OR?: Array<RentOfferBubbleWhereInput>;

    @Field(() => [RentOfferBubbleWhereInput], {nullable:true})
    NOT?: Array<RentOfferBubbleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    headerText?: StringFilter;

    @Field(() => ProductBubbleCompositeFilter, {nullable:true})
    product?: ProductBubbleCompositeFilter;

    @Field(() => RentDateTimeCompositeFilter, {nullable:true})
    start?: RentDateTimeCompositeFilter;

    @Field(() => RentDateTimeCompositeFilter, {nullable:true})
    end?: RentDateTimeCompositeFilter;

    @Field(() => StringFilter, {nullable:true})
    totalPrice?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    buyerFee?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    totalPriceWithBuyerFee?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    consideredWeeks?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    duration?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    deliveryMode?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    startDateTime?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    endDateTime?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userIdHavingAddress?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    addressIdSelected?: StringFilter;
}
