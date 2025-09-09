import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PackageDimensionsCreateInput } from './package-dimensions-create.input';
import { Type } from 'class-transformer';
import { PackageDimensionsUpdateInput } from './package-dimensions-update.input';

@InputType()
export class PackageDimensionsUpdateEnvelopeInput {

    @Field(() => PackageDimensionsCreateInput, {nullable:true})
    @Type(() => PackageDimensionsCreateInput)
    set?: PackageDimensionsCreateInput;

    @Field(() => PackageDimensionsUpdateInput, {nullable:true})
    @Type(() => PackageDimensionsUpdateInput)
    update?: PackageDimensionsUpdateInput;
}
