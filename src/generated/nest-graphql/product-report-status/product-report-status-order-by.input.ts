import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ProductReportStatusOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    reviewed?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    reviewedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    reviewedBy?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    action?: `${SortOrder}`;
}
