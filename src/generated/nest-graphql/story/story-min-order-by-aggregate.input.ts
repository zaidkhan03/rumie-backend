import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class StoryMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    caption?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    backgroundColor?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    viewCount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    eduInstituteId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    archived?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}
