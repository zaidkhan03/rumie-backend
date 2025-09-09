import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatReportReason } from '../prisma/campus-chat-report-reason.enum';
import { CampusChatReportStatusCreateEnvelopeInput } from '../campus-chat-report-status/campus-chat-report-status-create-envelope.input';

@InputType()
export class CampusChatReportUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    messageId!: string;

    @Field(() => String, {nullable:true})
    commentId?: string;

    @Field(() => String, {nullable:false})
    reporterId!: string;

    @Field(() => CampusChatReportReason, {nullable:false})
    reason!: `${CampusChatReportReason}`;

    @Field(() => String, {nullable:true})
    details?: string;

    @Field(() => CampusChatReportStatusCreateEnvelopeInput, {nullable:false})
    status!: CampusChatReportStatusCreateEnvelopeInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
