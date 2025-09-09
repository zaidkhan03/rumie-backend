import { registerEnumType } from '@nestjs/graphql';

export enum ConversationType {
    SAME_RADIUS = "SAME_RADIUS",
    OUTSIDE_RADIUS = "OUTSIDE_RADIUS",
    RENT = "RENT"
}


registerEnumType(ConversationType, { name: 'ConversationType', description: undefined })
