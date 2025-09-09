import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CampusChatMessageType } from '../prisma/campus-chat-message-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { CampusChatMessageFlaggedBy } from '../prisma/campus-chat-message-flagged-by.enum';
import { CampusChatMessageCountAggregate } from './campus-chat-message-count-aggregate.output';
import { CampusChatMessageAvgAggregate } from './campus-chat-message-avg-aggregate.output';
import { CampusChatMessageSumAggregate } from './campus-chat-message-sum-aggregate.output';
import { CampusChatMessageMinAggregate } from './campus-chat-message-min-aggregate.output';
import { CampusChatMessageMaxAggregate } from './campus-chat-message-max-aggregate.output';

@ObjectType()
export class CampusChatMessageGroupBy {

    @Field(() => String, {nullable:false})
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

    @Field(() => Int, {nullable:false})
    reportCount!: number;

    @Field(() => Boolean, {nullable:false})
    flagged!: boolean;

    @Field(() => Date, {nullable:true})
    flaggedAt?: Date | string;

    @Field(() => CampusChatMessageFlaggedBy, {nullable:true})
    flaggedBy?: `${CampusChatMessageFlaggedBy}`;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => CampusChatMessageCountAggregate, {nullable:true})
    _count?: CampusChatMessageCountAggregate;

    @Field(() => CampusChatMessageAvgAggregate, {nullable:true})
    _avg?: CampusChatMessageAvgAggregate;

    @Field(() => CampusChatMessageSumAggregate, {nullable:true})
    _sum?: CampusChatMessageSumAggregate;

    @Field(() => CampusChatMessageMinAggregate, {nullable:true})
    _min?: CampusChatMessageMinAggregate;

    @Field(() => CampusChatMessageMaxAggregate, {nullable:true})
    _max?: CampusChatMessageMaxAggregate;
}
