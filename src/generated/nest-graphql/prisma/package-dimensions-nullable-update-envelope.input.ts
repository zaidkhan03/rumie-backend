import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PackageDimensionsCreateInput } from '../package-dimensions/package-dimensions-create.input';
import { Type } from 'class-transformer';
import { PackageDimensionsUpsertInput } from './package-dimensions-upsert.input';

@InputType()
export class PackageDimensionsNullableUpdateEnvelopeInput {

    @Field(() => PackageDimensionsCreateInput, {nullable:true})
    @Type(() => PackageDimensionsCreateInput)
    set?: PackageDimensionsCreateInput;

    @Field(() => PackageDimensionsUpsertInput, {nullable:true})
    @Type(() => PackageDimensionsUpsertInput)
    upsert?: PackageDimensionsUpsertInput;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
