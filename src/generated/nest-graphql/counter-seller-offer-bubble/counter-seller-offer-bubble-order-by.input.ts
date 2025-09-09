import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CounterSellerOfferBubbleOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    headerText?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    offerPrice?: `${SortOrder}`;
}
