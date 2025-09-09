import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PrivacyPolicyUpdateInput } from './privacy-policy-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PrivacyPolicyWhereUniqueInput } from './privacy-policy-where-unique.input';

@ArgsType()
export class UpdateOnePrivacyPolicyArgs {

    @Field(() => PrivacyPolicyUpdateInput, {nullable:false})
    @Type(() => PrivacyPolicyUpdateInput)
    data!: PrivacyPolicyUpdateInput;

    @Field(() => PrivacyPolicyWhereUniqueInput, {nullable:false})
    @Type(() => PrivacyPolicyWhereUniqueInput)
    where!: Prisma.AtLeast<PrivacyPolicyWhereUniqueInput, 'id'>;
}
