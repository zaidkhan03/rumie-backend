import { registerEnumType } from '@nestjs/graphql';

export enum PrivacyPolicyScalarFieldEnum {
    id = "id",
    question = "question",
    answer = "answer",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PrivacyPolicyScalarFieldEnum, { name: 'PrivacyPolicyScalarFieldEnum', description: undefined })
