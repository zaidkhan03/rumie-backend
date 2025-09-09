import { registerEnumType } from '@nestjs/graphql';

export enum ChatBubblesScalarFieldEnum {
    id = "id"
}


registerEnumType(ChatBubblesScalarFieldEnum, { name: 'ChatBubblesScalarFieldEnum', description: undefined })
