import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AltSignupCreateInput } from '../alt-signup/alt-signup-create.input';
import { Type } from 'class-transformer';
import { AltSignupUpdateInput } from '../alt-signup/alt-signup-update.input';

@InputType()
export class AltSignupUpsertInput {

    @Field(() => AltSignupCreateInput, {nullable:false})
    @Type(() => AltSignupCreateInput)
    set!: AltSignupCreateInput;

    @Field(() => AltSignupUpdateInput, {nullable:false})
    @Type(() => AltSignupUpdateInput)
    update!: AltSignupUpdateInput;
}
