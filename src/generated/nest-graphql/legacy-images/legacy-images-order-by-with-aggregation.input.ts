import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LegacyImagesCountOrderByAggregateInput } from './legacy-images-count-order-by-aggregate.input';
import { LegacyImagesMaxOrderByAggregateInput } from './legacy-images-max-order-by-aggregate.input';
import { LegacyImagesMinOrderByAggregateInput } from './legacy-images-min-order-by-aggregate.input';

@InputType()
export class LegacyImagesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    oldUrl?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    newUrl?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => LegacyImagesCountOrderByAggregateInput, {nullable:true})
    _count?: LegacyImagesCountOrderByAggregateInput;

    @Field(() => LegacyImagesMaxOrderByAggregateInput, {nullable:true})
    _max?: LegacyImagesMaxOrderByAggregateInput;

    @Field(() => LegacyImagesMinOrderByAggregateInput, {nullable:true})
    _min?: LegacyImagesMinOrderByAggregateInput;
}
