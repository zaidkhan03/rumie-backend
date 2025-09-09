import { registerEnumType } from '@nestjs/graphql';

export enum ProductReportAction {
    REMOVED = "REMOVED",
    WARNING_ISSUED = "WARNING_ISSUED",
    NO_ACTION = "NO_ACTION"
}


registerEnumType(ProductReportAction, { name: 'ProductReportAction', description: undefined })
