import { registerEnumType } from '@nestjs/graphql';

export enum ReactionType {
    LIKE = "LIKE",
    LOVE = "LOVE",
    LAUGH = "LAUGH",
    WOW = "WOW",
    SAD = "SAD",
    ANGRY = "ANGRY"
}


registerEnumType(ReactionType, { name: 'ReactionType', description: undefined })
