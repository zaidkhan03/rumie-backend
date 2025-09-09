import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PackageWeightCreateInput } from '../package-weight/package-weight-create.input';
import { Type } from 'class-transformer';
import { PackageWeightUpsertInput } from './package-weight-upsert.input';

@InputType()
export class PackageWeightNullableUpdateEnvelopeInput {

    @Field(() => PackageWeightCreateInput, {nullable:true})
    @Type(() => PackageWeightCreateInput)
    set?: PackageWeightCreateInput;

    @Field(() => PackageWeightUpsertInput, {nullable:true})
    @Type(() => PackageWeightUpsertInput)
    upsert?: PackageWeightUpsertInput;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
