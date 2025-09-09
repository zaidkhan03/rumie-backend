import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { CampusChatReportReason } from '../prisma/campus-chat-report-reason.enum';
import { CampusChatReportStatus } from '../campus-chat-report-status/campus-chat-report-status.model';

@ObjectType()
export class CampusChatReport {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    messageId!: string;

    @Field(() => String, {nullable:true})
    commentId!: string | null;

    @Field(() => String, {nullable:false})
    reporterId!: string;

    @Field(() => CampusChatReportReason, {nullable:false})
    reason!: `${CampusChatReportReason}`;

    @Field(() => String, {nullable:true})
    details!: string | null;

    @Field(() => CampusChatReportStatus, {nullable:false})
    status?: CampusChatReportStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
