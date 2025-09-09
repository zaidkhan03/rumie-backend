import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PrivacyPolicyWhereInput } from './privacy-policy-where.input';
import { Type } from 'class-transformer';
import { PrivacyPolicyOrderByWithRelationInput } from './privacy-policy-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PrivacyPolicyWhereUniqueInput } from './privacy-policy-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PrivacyPolicyScalarFieldEnum } from './privacy-policy-scalar-field.enum';

@ArgsType()
export class FindFirstPrivacyPolicyOrThrowArgs {

    @Field(() => PrivacyPolicyWhereInput, {nullable:true})
    @Type(() => PrivacyPolicyWhereInput)
    where?: PrivacyPolicyWhereInput;

    @Field(() => [PrivacyPolicyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PrivacyPolicyOrderByWithRelationInput>;

    @Field(() => PrivacyPolicyWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PrivacyPolicyWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PrivacyPolicyScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PrivacyPolicyScalarFieldEnum}`>;
}
