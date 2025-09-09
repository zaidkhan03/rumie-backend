import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class RentDateTimeOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    date?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    time?: `${SortOrder}`;
}
