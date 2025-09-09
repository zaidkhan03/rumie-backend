import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class OrderPayoutOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    creditedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    payoutId?: `${SortOrder}`;
}
