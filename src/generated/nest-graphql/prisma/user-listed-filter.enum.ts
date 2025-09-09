import { registerEnumType } from '@nestjs/graphql';

export enum UserListedFilter {
    YES = "YES",
    NO = "NO",
    ONLY_RENTALS = "ONLY_RENTALS",
    ONLY_MARKETPLACE = "ONLY_MARKETPLACE"
}


registerEnumType(UserListedFilter, { name: 'UserListedFilter', description: undefined })
