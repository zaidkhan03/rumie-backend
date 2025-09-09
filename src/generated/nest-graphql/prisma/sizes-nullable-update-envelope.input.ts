import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SizesCreateInput } from '../sizes/sizes-create.input';
import { Type } from 'class-transformer';
import { SizesUpsertInput } from './sizes-upsert.input';

@InputType()
export class SizesNullableUpdateEnvelopeInput {

    @Field(() => SizesCreateInput, {nullable:true})
    @Type(() => SizesCreateInput)
    set?: SizesCreateInput;

    @Field(() => SizesUpsertInput, {nullable:true})
    @Type(() => SizesUpsertInput)
    upsert?: SizesUpsertInput;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
