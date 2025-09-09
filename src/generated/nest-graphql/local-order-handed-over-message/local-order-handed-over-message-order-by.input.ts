import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class LocalOrderHandedOverMessageOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    buyerHeading?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    buyerDescription?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    sellerHeading?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    sellerDescription?: `${SortOrder}`;
}
