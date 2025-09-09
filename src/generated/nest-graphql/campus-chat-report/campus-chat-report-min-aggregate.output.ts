import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CampusChatReportReason } from '../prisma/campus-chat-report-reason.enum';

@ObjectType()
export class CampusChatReportMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    messageId?: string;

    @Field(() => String, {nullable:true})
    commentId?: string;

    @Field(() => String, {nullable:true})
    reporterId?: string;

    @Field(() => CampusChatReportReason, {nullable:true})
    reason?: `${CampusChatReportReason}`;

    @Field(() => String, {nullable:true})
    details?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
