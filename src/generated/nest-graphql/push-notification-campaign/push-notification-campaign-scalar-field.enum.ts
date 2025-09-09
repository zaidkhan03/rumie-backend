import { registerEnumType } from '@nestjs/graphql';

export enum PushNotificationCampaignScalarFieldEnum {
    id = "id",
    name = "name",
    senderListType = "senderListType",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PushNotificationCampaignScalarFieldEnum, { name: 'PushNotificationCampaignScalarFieldEnum', description: undefined })
