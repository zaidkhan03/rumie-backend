import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatMessageType } from '../prisma/campus-chat-message-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { CampusChatCommentCreateInput } from '../campus-chat-comment/campus-chat-comment-create.input';
import { CampusChatReactionCreateInput } from '../campus-chat-reaction/campus-chat-reaction-create.input';
import { Int } from '@nestjs/graphql';
import { CampusChatMessageFlaggedBy } from '../prisma/campus-chat-message-flagged-by.enum';

@InputType()
export class CampusChatMessageCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    chatId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    clientId!: string;

    @Field(() => CampusChatMessageType, {nullable:false})
    type!: `${CampusChatMessageType}`;

    @Field(() => GraphQLJSON, {nullable:false})
    content!: any;

    @Field(() => [CampusChatCommentCreateInput], {nullable:true})
    comments?: Array<CampusChatCommentCreateInput>;

    @Field(() => [CampusChatReactionCreateInput], {nullable:true})
    reactions?: Array<CampusChatReactionCreateInput>;

    @Field(() => Int, {nullable:true})
    reportCount?: number;

    @Field(() => Boolean, {nullable:true})
    flagged?: boolean;

    @Field(() => Date, {nullable:true})
    flaggedAt?: Date | string;

    @Field(() => CampusChatMessageFlaggedBy, {nullable:true})
    flaggedBy?: `${CampusChatMessageFlaggedBy}`;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
