import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { CampusChatMessageType } from '../prisma/campus-chat-message-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { CampusChatComment } from '../campus-chat-comment/campus-chat-comment.model';
import { CampusChatReaction } from '../campus-chat-reaction/campus-chat-reaction.model';
import { Int } from '@nestjs/graphql';
import { CampusChatMessageFlaggedBy } from '../prisma/campus-chat-message-flagged-by.enum';

@ObjectType()
export class CampusChatMessage {

    @Field(() => ID, {nullable:false})
    id!: string;

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

    @Field(() => [CampusChatComment], {nullable:true})
    comments?: Array<CampusChatComment>;

    @Field(() => [CampusChatReaction], {nullable:true})
    reactions?: Array<CampusChatReaction>;

    @Field(() => Int, {defaultValue:0,nullable:false})
    reportCount!: number;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    flagged!: boolean;

    @Field(() => Date, {nullable:true})
    flaggedAt!: Date | null;

    @Field(() => CampusChatMessageFlaggedBy, {nullable:true})
    flaggedBy!: `${CampusChatMessageFlaggedBy}` | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
