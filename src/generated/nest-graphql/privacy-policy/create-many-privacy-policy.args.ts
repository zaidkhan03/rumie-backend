import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PrivacyPolicyCreateManyInput } from './privacy-policy-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPrivacyPolicyArgs {

    @Field(() => [PrivacyPolicyCreateManyInput], {nullable:false})
    @Type(() => PrivacyPolicyCreateManyInput)
    data!: Array<PrivacyPolicyCreateManyInput>;
}
