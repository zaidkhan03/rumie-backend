import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PaymentLinkMessageOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    mainText?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    disclaimerText?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    amount?: `${SortOrder}`;
}
