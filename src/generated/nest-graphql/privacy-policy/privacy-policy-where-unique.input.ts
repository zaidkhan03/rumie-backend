import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PrivacyPolicyWhereInput } from './privacy-policy-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PrivacyPolicyWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [PrivacyPolicyWhereInput], {nullable:true})
    AND?: Array<PrivacyPolicyWhereInput>;

    @Field(() => [PrivacyPolicyWhereInput], {nullable:true})
    OR?: Array<PrivacyPolicyWhereInput>;

    @Field(() => [PrivacyPolicyWhereInput], {nullable:true})
    NOT?: Array<PrivacyPolicyWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    question?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    answer?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
