import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatReportAction } from './campus-chat-report-action.enum';

@InputType()
export class NullableEnumCampusChatReportActionFieldUpdateOperationsInput {

    @Field(() => CampusChatReportAction, {nullable:true})
    set?: `${CampusChatReportAction}`;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
