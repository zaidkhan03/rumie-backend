import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CampusChatCommentOrderByCompositeAggregateInput } from '../campus-chat-comment/campus-chat-comment-order-by-composite-aggregate.input';
import { CampusChatReactionOrderByCompositeAggregateInput } from '../campus-chat-reaction/campus-chat-reaction-order-by-composite-aggregate.input';

@InputType()
export class CampusChatMessageOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    chatId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    clientId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;

    @Field(() => CampusChatCommentOrderByCompositeAggregateInput, {nullable:true})
    comments?: CampusChatCommentOrderByCompositeAggregateInput;

    @Field(() => CampusChatReactionOrderByCompositeAggregateInput, {nullable:true})
    reactions?: CampusChatReactionOrderByCompositeAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    reportCount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    flagged?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    flaggedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    flaggedBy?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}
