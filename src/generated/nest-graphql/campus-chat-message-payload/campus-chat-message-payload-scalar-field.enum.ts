import { registerEnumType } from '@nestjs/graphql';

export enum CampusChatMessagePayloadScalarFieldEnum {
    id = "id"
}


registerEnumType(CampusChatMessagePayloadScalarFieldEnum, { name: 'CampusChatMessagePayloadScalarFieldEnum', description: undefined })
