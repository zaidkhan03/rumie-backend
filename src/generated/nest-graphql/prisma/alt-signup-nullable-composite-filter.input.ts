import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AltSignupObjectEqualityInput } from './alt-signup-object-equality.input';
import { AltSignupWhereInput } from '../alt-signup/alt-signup-where.input';

@InputType()
export class AltSignupNullableCompositeFilter {

    @Field(() => AltSignupObjectEqualityInput, {nullable:true})
    equals?: AltSignupObjectEqualityInput;

    @Field(() => AltSignupWhereInput, {nullable:true})
    is?: AltSignupWhereInput;

    @Field(() => AltSignupWhereInput, {nullable:true})
    isNot?: AltSignupWhereInput;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
