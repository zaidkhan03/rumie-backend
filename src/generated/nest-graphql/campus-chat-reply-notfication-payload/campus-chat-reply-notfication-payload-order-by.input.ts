import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CampusChatReplyNotficationPayloadOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    messageId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    commentId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    commentedBy?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    commentExcerpt?: `${SortOrder}`;
}
