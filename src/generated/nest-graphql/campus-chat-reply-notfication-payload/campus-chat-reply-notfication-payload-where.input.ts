import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class CampusChatReplyNotficationPayloadWhereInput {

    @Field(() => [CampusChatReplyNotficationPayloadWhereInput], {nullable:true})
    AND?: Array<CampusChatReplyNotficationPayloadWhereInput>;

    @Field(() => [CampusChatReplyNotficationPayloadWhereInput], {nullable:true})
    OR?: Array<CampusChatReplyNotficationPayloadWhereInput>;

    @Field(() => [CampusChatReplyNotficationPayloadWhereInput], {nullable:true})
    NOT?: Array<CampusChatReplyNotficationPayloadWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    messageId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    commentId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    commentedBy?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    commentExcerpt?: StringFilter;
}
