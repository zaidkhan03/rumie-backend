import { registerEnumType } from '@nestjs/graphql';

export enum AdminRole {
    SUPER_ADMIN = "SUPER_ADMIN",
    ADMIN = "ADMIN",
    MANAGER = "MANAGER",
    MARKETER = "MARKETER",
    ANALYST = "ANALYST",
    SUPPORT = "SUPPORT"
}


registerEnumType(AdminRole, { name: 'AdminRole', description: undefined })
