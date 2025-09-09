import { registerEnumType } from '@nestjs/graphql';

export enum ProductCondition {
    OKAYISH = "OKAYISH",
    GOOD = "GOOD",
    FABULOUS = "FABULOUS",
    NEW = "NEW"
}


registerEnumType(ProductCondition, { name: 'ProductCondition', description: undefined })
