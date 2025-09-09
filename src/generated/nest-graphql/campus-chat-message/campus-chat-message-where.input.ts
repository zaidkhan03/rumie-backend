import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumCampusChatMessageTypeFilter } from '../prisma/enum-campus-chat-message-type-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { CampusChatCommentObjectEqualityInput } from '../prisma/campus-chat-comment-object-equality.input';
import { CampusChatReactionObjectEqualityInput } from '../prisma/campus-chat-reaction-object-equality.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumCampusChatMessageFlaggedByNullableFilter } from '../prisma/enum-campus-chat-message-flagged-by-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CampusChatMessageWhereInput {

    @Field(() => [CampusChatMessageWhereInput], {nullable:true})
    AND?: Array<CampusChatMessageWhereInput>;

    @Field(() => [CampusChatMessageWhereInput], {nullable:true})
    OR?: Array<CampusChatMessageWhereInput>;

    @Field(() => [CampusChatMessageWhereInput], {nullable:true})
    NOT?: Array<CampusChatMessageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    chatId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    clientId?: StringFilter;

    @Field(() => EnumCampusChatMessageTypeFilter, {nullable:true})
    type?: EnumCampusChatMessageTypeFilter;

    @Field(() => JsonFilter, {nullable:true})
    content?: JsonFilter;

    @Field(() => [CampusChatCommentObjectEqualityInput], {nullable:true})
    comments?: Array<CampusChatCommentObjectEqualityInput>;

    @Field(() => [CampusChatReactionObjectEqualityInput], {nullable:true})
    reactions?: Array<CampusChatReactionObjectEqualityInput>;

    @Field(() => IntFilter, {nullable:true})
    reportCount?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    flagged?: BoolFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    flaggedAt?: DateTimeNullableFilter;

    @Field(() => EnumCampusChatMessageFlaggedByNullableFilter, {nullable:true})
    flaggedBy?: EnumCampusChatMessageFlaggedByNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
