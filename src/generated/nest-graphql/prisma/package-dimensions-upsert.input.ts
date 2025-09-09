import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PackageDimensionsCreateInput } from '../package-dimensions/package-dimensions-create.input';
import { Type } from 'class-transformer';
import { PackageDimensionsUpdateInput } from '../package-dimensions/package-dimensions-update.input';

@InputType()
export class PackageDimensionsUpsertInput {

    @Field(() => PackageDimensionsCreateInput, {nullable:false})
    @Type(() => PackageDimensionsCreateInput)
    set!: PackageDimensionsCreateInput;

    @Field(() => PackageDimensionsUpdateInput, {nullable:false})
    @Type(() => PackageDimensionsUpdateInput)
    update!: PackageDimensionsUpdateInput;
}
