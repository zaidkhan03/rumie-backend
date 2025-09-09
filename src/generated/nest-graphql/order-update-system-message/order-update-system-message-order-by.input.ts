import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class OrderUpdateSystemMessageOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    icon1?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    icon2?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    icon3?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    text1?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    text2?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    text3?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    trackingNumber?: `${SortOrder}`;
}
