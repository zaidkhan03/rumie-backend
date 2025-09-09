import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DealTextContentOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    heading?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    paragraph?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pointers?: `${SortOrder}`;
}
