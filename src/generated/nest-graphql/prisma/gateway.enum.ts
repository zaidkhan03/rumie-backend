import { registerEnumType } from '@nestjs/graphql';

export enum Gateway {
    STRIPE = "STRIPE"
}


registerEnumType(Gateway, { name: 'Gateway', description: undefined })
