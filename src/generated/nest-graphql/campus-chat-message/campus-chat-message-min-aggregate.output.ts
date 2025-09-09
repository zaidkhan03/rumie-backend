import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CampusChatMessageType } from '../prisma/campus-chat-message-type.enum';
import { Int } from '@nestjs/graphql';
import { CampusChatMessageFlaggedBy } from '../prisma/campus-chat-message-flagged-by.enum';

@ObjectType()
export class CampusChatMessageMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    chatId?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    clientId?: string;

    @Field(() => CampusChatMessageType, {nullable:true})
    type?: `${CampusChatMessageType}`;

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
