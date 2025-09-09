import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class RentOrderOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    startDate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    endDate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    initialImages?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    completionImages?: `${SortOrder}`;
}
