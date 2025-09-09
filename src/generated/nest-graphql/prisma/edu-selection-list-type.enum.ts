import { registerEnumType } from '@nestjs/graphql';

export enum EduSelectionListType {
    ALL_UNIVERSITIES = "ALL_UNIVERSITIES",
    ONLY_SELECTED_UNIVERSTIES = "ONLY_SELECTED_UNIVERSTIES",
    ALL_BUT_EXCLUDED_UNIVERSITIES = "ALL_BUT_EXCLUDED_UNIVERSITIES"
}


registerEnumType(EduSelectionListType, { name: 'EduSelectionListType', description: undefined })
