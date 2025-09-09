import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PackageWeightObjectEqualityInput } from './package-weight-object-equality.input';
import { PackageWeightWhereInput } from '../package-weight/package-weight-where.input';

@InputType()
export class PackageWeightNullableCompositeFilter {

    @Field(() => PackageWeightObjectEqualityInput, {nullable:true})
    equals?: PackageWeightObjectEqualityInput;

    @Field(() => PackageWeightWhereInput, {nullable:true})
    is?: PackageWeightWhereInput;

    @Field(() => PackageWeightWhereInput, {nullable:true})
    isNot?: PackageWeightWhereInput;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
