import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PrivacyPolicyWhereUniqueInput } from './privacy-policy-where-unique.input';
import { Type } from 'class-transformer';
import { PrivacyPolicyCreateInput } from './privacy-policy-create.input';
import { PrivacyPolicyUpdateInput } from './privacy-policy-update.input';

@ArgsType()
export class UpsertOnePrivacyPolicyArgs {

    @Field(() => PrivacyPolicyWhereUniqueInput, {nullable:false})
    @Type(() => PrivacyPolicyWhereUniqueInput)
    where!: Prisma.AtLeast<PrivacyPolicyWhereUniqueInput, 'id'>;

    @Field(() => PrivacyPolicyCreateInput, {nullable:false})
    @Type(() => PrivacyPolicyCreateInput)
    create!: PrivacyPolicyCreateInput;

    @Field(() => PrivacyPolicyUpdateInput, {nullable:false})
    @Type(() => PrivacyPolicyUpdateInput)
    update!: PrivacyPolicyUpdateInput;
}
