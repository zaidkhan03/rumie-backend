import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SizesObjectEqualityInput } from './sizes-object-equality.input';
import { SizesWhereInput } from '../sizes/sizes-where.input';

@InputType()
export class SizesNullableCompositeFilter {

    @Field(() => SizesObjectEqualityInput, {nullable:true})
    equals?: SizesObjectEqualityInput;

    @Field(() => SizesWhereInput, {nullable:true})
    is?: SizesWhereInput;

    @Field(() => SizesWhereInput, {nullable:true})
    isNot?: SizesWhereInput;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
