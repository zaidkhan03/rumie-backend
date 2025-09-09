import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AdminSessionOrderByCompositeAggregateInput } from '../admin-session/admin-session-order-by-composite-aggregate.input';

@InputType()
export class AdminOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    username?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    countryCode?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    roles?: `${SortOrder}`;

    @Field(() => AdminSessionOrderByCompositeAggregateInput, {nullable:true})
    sessions?: AdminSessionOrderByCompositeAggregateInput;
}
