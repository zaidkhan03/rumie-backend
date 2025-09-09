import { registerEnumType } from '@nestjs/graphql';

export enum CampusChatReportAction {
    REMOVED = "REMOVED",
    WARNING_ISSUED = "WARNING_ISSUED",
    NO_ACTION = "NO_ACTION"
}


registerEnumType(CampusChatReportAction, { name: 'CampusChatReportAction', description: undefined })
