import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PackageWeightOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    value?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    unit?: `${SortOrder}`;
}
