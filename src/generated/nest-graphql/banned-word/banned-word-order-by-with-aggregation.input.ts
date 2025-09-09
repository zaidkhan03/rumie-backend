import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BannedWordCountOrderByAggregateInput } from './banned-word-count-order-by-aggregate.input';
import { BannedWordMaxOrderByAggregateInput } from './banned-word-max-order-by-aggregate.input';
import { BannedWordMinOrderByAggregateInput } from './banned-word-min-order-by-aggregate.input';

@InputType()
export class BannedWordOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    word?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => BannedWordCountOrderByAggregateInput, {nullable:true})
    _count?: BannedWordCountOrderByAggregateInput;

    @Field(() => BannedWordMaxOrderByAggregateInput, {nullable:true})
    _max?: BannedWordMaxOrderByAggregateInput;

    @Field(() => BannedWordMinOrderByAggregateInput, {nullable:true})
    _min?: BannedWordMinOrderByAggregateInput;
}
