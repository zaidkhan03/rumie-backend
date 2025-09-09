import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AltSignupCreateInput } from '../alt-signup/alt-signup-create.input';
import { Type } from 'class-transformer';
import { AltSignupUpsertInput } from './alt-signup-upsert.input';

@InputType()
export class AltSignupNullableUpdateEnvelopeInput {

    @Field(() => AltSignupCreateInput, {nullable:true})
    @Type(() => AltSignupCreateInput)
    set?: AltSignupCreateInput;

    @Field(() => AltSignupUpsertInput, {nullable:true})
    @Type(() => AltSignupUpsertInput)
    upsert?: AltSignupUpsertInput;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
