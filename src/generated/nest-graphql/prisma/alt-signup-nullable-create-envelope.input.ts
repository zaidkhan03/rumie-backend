import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AltSignupCreateInput } from '../alt-signup/alt-signup-create.input';
import { Type } from 'class-transformer';

@InputType()
export class AltSignupNullableCreateEnvelopeInput {

    @Field(() => AltSignupCreateInput, {nullable:true})
    @Type(() => AltSignupCreateInput)
    set?: AltSignupCreateInput;
}
