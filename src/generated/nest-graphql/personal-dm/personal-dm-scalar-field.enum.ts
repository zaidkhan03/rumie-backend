import { registerEnumType } from '@nestjs/graphql';

export enum PersonalDMScalarFieldEnum {
    id = "id",
    initiatedBy = "initiatedBy",
    participantIds = "participantIds",
    lastMessageId = "lastMessageId",
    valid = "valid",
    enabled = "enabled",
    payload = "payload",
    consumersLastSeen = "consumersLastSeen",
    providersLastSeen = "providersLastSeen",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PersonalDMScalarFieldEnum, { name: 'PersonalDMScalarFieldEnum', description: undefined })
