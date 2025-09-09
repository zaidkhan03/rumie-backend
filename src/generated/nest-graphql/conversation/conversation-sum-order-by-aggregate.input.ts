import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ConversationSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    paymentLinkCount?: `${SortOrder}`;
}
