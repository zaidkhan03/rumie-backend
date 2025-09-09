import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PackageWeightCreateInput } from '../package-weight/package-weight-create.input';
import { Type } from 'class-transformer';
import { PackageWeightUpdateInput } from '../package-weight/package-weight-update.input';

@InputType()
export class PackageWeightUpsertInput {

    @Field(() => PackageWeightCreateInput, {nullable:false})
    @Type(() => PackageWeightCreateInput)
    set!: PackageWeightCreateInput;

    @Field(() => PackageWeightUpdateInput, {nullable:false})
    @Type(() => PackageWeightUpdateInput)
    update!: PackageWeightUpdateInput;
}
