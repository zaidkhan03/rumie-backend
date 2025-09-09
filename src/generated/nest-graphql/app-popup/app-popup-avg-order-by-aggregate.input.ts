import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AppPopupAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    frequency?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    delayInSeconds?: `${SortOrder}`;
}
