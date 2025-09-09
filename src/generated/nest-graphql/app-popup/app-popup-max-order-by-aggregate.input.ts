import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AppPopupMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    frequency?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    selectionListType?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    template?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    image?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    ctaUrl?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    ctaText?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    couponCode?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    delayInSeconds?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}
