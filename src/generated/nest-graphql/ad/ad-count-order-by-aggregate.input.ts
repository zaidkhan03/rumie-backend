import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AdCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    visibility?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    image?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    advertiserName?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    advertiserId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    monthlyBudget?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    priority?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    targetGenders?: `${SortOrder}`;
}
