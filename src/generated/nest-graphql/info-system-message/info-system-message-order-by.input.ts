import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class InfoSystemMessageOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    icon?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    text1?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    text2?: `${SortOrder}`;
}
