import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CampusChatReportCountOrderByAggregateInput } from './campus-chat-report-count-order-by-aggregate.input';
import { CampusChatReportMaxOrderByAggregateInput } from './campus-chat-report-max-order-by-aggregate.input';
import { CampusChatReportMinOrderByAggregateInput } from './campus-chat-report-min-order-by-aggregate.input';

@InputType()
export class CampusChatReportOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    messageId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    commentId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    reporterId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    reason?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    details?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => CampusChatReportCountOrderByAggregateInput, {nullable:true})
    _count?: CampusChatReportCountOrderByAggregateInput;

    @Field(() => CampusChatReportMaxOrderByAggregateInput, {nullable:true})
    _max?: CampusChatReportMaxOrderByAggregateInput;

    @Field(() => CampusChatReportMinOrderByAggregateInput, {nullable:true})
    _min?: CampusChatReportMinOrderByAggregateInput;
}
