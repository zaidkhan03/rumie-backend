import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatReportAction } from './campus-chat-report-action.enum';

@InputType()
export class CampusChatReportStatusObjectEqualityInput {

    @Field(() => Boolean, {nullable:false})
    reviewed!: boolean;

    @Field(() => Date, {nullable:true})
    reviewedAt?: Date | string;

    @Field(() => String, {nullable:true})
    reviewedBy?: string;

    @Field(() => CampusChatReportAction, {nullable:true})
    action?: `${CampusChatReportAction}`;
}
