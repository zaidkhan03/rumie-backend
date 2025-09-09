import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PromoCodeAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    value?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    usageLimit?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    useCount?: `${SortOrder}`;
}
