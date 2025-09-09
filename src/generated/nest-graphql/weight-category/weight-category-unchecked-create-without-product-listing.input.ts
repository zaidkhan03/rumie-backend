import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PackageDimensionsCreateEnvelopeInput } from '../package-dimensions/package-dimensions-create-envelope.input';
import { PackageWeightCreateEnvelopeInput } from '../package-weight/package-weight-create-envelope.input';
import { Float } from '@nestjs/graphql';

@InputType()
export class WeightCategoryUncheckedCreateWithoutProductListingInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    alias!: string;

    @Field(() => PackageDimensionsCreateEnvelopeInput, {nullable:false})
    packageDimensions!: PackageDimensionsCreateEnvelopeInput;

    @Field(() => PackageWeightCreateEnvelopeInput, {nullable:false})
    packageWeight!: PackageWeightCreateEnvelopeInput;

    @Field(() => Float, {nullable:false})
    shippingFee!: number;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
