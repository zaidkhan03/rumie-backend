import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PackageDimensionsOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    height?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    width?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    length?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    unit?: `${SortOrder}`;
}
