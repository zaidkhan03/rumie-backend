import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';

@InputType()
export class CounterSellerOfferBubbleWhereInput {

    @Field(() => [CounterSellerOfferBubbleWhereInput], {nullable:true})
    AND?: Array<CounterSellerOfferBubbleWhereInput>;

    @Field(() => [CounterSellerOfferBubbleWhereInput], {nullable:true})
    OR?: Array<CounterSellerOfferBubbleWhereInput>;

    @Field(() => [CounterSellerOfferBubbleWhereInput], {nullable:true})
    NOT?: Array<CounterSellerOfferBubbleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    headerText?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    offerPrice?: FloatFilter;
}
