import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PackageDimensionsObjectEqualityInput } from './package-dimensions-object-equality.input';
import { PackageDimensionsWhereInput } from '../package-dimensions/package-dimensions-where.input';

@InputType()
export class PackageDimensionsNullableCompositeFilter {

    @Field(() => PackageDimensionsObjectEqualityInput, {nullable:true})
    equals?: PackageDimensionsObjectEqualityInput;

    @Field(() => PackageDimensionsWhereInput, {nullable:true})
    is?: PackageDimensionsWhereInput;

    @Field(() => PackageDimensionsWhereInput, {nullable:true})
    isNot?: PackageDimensionsWhereInput;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
