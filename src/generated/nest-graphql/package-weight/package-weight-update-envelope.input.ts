import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PackageWeightCreateInput } from './package-weight-create.input';
import { Type } from 'class-transformer';
import { PackageWeightUpdateInput } from './package-weight-update.input';

@InputType()
export class PackageWeightUpdateEnvelopeInput {

    @Field(() => PackageWeightCreateInput, {nullable:true})
    @Type(() => PackageWeightCreateInput)
    set?: PackageWeightCreateInput;

    @Field(() => PackageWeightUpdateInput, {nullable:true})
    @Type(() => PackageWeightUpdateInput)
    update?: PackageWeightUpdateInput;
}
