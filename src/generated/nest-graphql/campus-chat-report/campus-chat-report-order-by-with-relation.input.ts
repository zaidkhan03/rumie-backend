import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CampusChatReportStatusOrderByInput } from '../campus-chat-report-status/campus-chat-report-status-order-by.input';

@InputType()
export class CampusChatReportOrderByWithRelationInput {

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

    @Field(() => CampusChatReportStatusOrderByInput, {nullable:true})
    status?: CampusChatReportStatusOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}
