import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PrivacyPolicyUpdateManyMutationInput } from './privacy-policy-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PrivacyPolicyWhereInput } from './privacy-policy-where.input';

@ArgsType()
export class UpdateManyPrivacyPolicyArgs {

    @Field(() => PrivacyPolicyUpdateManyMutationInput, {nullable:false})
    @Type(() => PrivacyPolicyUpdateManyMutationInput)
    data!: PrivacyPolicyUpdateManyMutationInput;

    @Field(() => PrivacyPolicyWhereInput, {nullable:true})
    @Type(() => PrivacyPolicyWhereInput)
    where?: PrivacyPolicyWhereInput;
}
