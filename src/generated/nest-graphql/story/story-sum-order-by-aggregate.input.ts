import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class StorySumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    viewCount?: `${SortOrder}`;
}
