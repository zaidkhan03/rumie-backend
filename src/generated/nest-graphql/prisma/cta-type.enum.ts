import { registerEnumType } from '@nestjs/graphql';

export enum CTAType {
    EXTERNAL_URL = "EXTERNAL_URL",
    NAVIGATION = "NAVIGATION"
}


registerEnumType(CTAType, { name: 'CTAType', description: undefined })
