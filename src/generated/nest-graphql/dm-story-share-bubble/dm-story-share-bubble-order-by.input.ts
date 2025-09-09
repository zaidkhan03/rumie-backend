import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DMStoryShareBubbleOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    text?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    thumbnail?: `${SortOrder}`;
}
