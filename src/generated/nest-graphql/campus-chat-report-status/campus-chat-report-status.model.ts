import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CampusChatReportAction } from '../prisma/campus-chat-report-action.enum';

@ObjectType()
export class CampusChatReportStatus {

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    reviewed!: boolean;

    @Field(() => Date, {nullable:true})
    reviewedAt!: Date | null;

    @Field(() => String, {nullable:true})
    reviewedBy!: string | null;

    @Field(() => CampusChatReportAction, {nullable:true})
    action!: `${CampusChatReportAction}` | null;
}
