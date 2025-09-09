import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PaymentConfirmationSystemMessageOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    icon?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    text1?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    text2?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shippingAddress?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    note?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    orderId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    localTxn?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    conversationType?: `${SortOrder}`;
}
