import { registerEnumType } from '@nestjs/graphql';

export enum SystemIcons {
    RUMIE_HAT = "RUMIE_HAT",
    OFFER = "OFFER",
    PACKAGE = "PACKAGE",
    USPS = "USPS"
}


registerEnumType(SystemIcons, { name: 'SystemIcons', description: undefined })
