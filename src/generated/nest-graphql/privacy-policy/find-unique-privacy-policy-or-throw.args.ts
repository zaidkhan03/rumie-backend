import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PrivacyPolicyWhereUniqueInput } from './privacy-policy-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePrivacyPolicyOrThrowArgs {

    @Field(() => PrivacyPolicyWhereUniqueInput, {nullable:false})
    @Type(() => PrivacyPolicyWhereUniqueInput)
    where!: Prisma.AtLeast<PrivacyPolicyWhereUniqueInput, 'id'>;
}
