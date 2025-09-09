import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PackageWeightCreateInput } from './package-weight-create.input';
import { Type } from 'class-transformer';

@InputType()
export class PackageWeightCreateEnvelopeInput {

    @Field(() => PackageWeightCreateInput, {nullable:true})
    @Type(() => PackageWeightCreateInput)
    set?: PackageWeightCreateInput;
}
