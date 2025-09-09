import { registerEnumType } from '@nestjs/graphql';

export enum DMMessageTypeScalarFieldEnum {
    id = "id"
}


registerEnumType(DMMessageTypeScalarFieldEnum, { name: 'DMMessageTypeScalarFieldEnum', description: undefined })
