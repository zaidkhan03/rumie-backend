import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class SizesOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    shoes?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    upperWear?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    lowerWear?: `${SortOrder}`;
}
