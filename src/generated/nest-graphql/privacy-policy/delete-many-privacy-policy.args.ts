import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PrivacyPolicyWhereInput } from './privacy-policy-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPrivacyPolicyArgs {

    @Field(() => PrivacyPolicyWhereInput, {nullable:true})
    @Type(() => PrivacyPolicyWhereInput)
    where?: PrivacyPolicyWhereInput;
}
