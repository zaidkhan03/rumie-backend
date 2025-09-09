import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PrivacyPolicyCreateInput } from './privacy-policy-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePrivacyPolicyArgs {

    @Field(() => PrivacyPolicyCreateInput, {nullable:false})
    @Type(() => PrivacyPolicyCreateInput)
    data!: PrivacyPolicyCreateInput;
}
