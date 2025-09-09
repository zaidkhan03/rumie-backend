import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PackageDimensionsCreateInput } from './package-dimensions-create.input';
import { Type } from 'class-transformer';

@InputType()
export class PackageDimensionsCreateEnvelopeInput {

    @Field(() => PackageDimensionsCreateInput, {nullable:true})
    @Type(() => PackageDimensionsCreateInput)
    set?: PackageDimensionsCreateInput;
}
