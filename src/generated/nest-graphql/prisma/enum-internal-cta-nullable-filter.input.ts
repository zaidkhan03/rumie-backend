import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InternalCTA } from './internal-cta.enum';
import { NestedEnumInternalCTANullableFilter } from './nested-enum-internal-cta-nullable-filter.input';

@InputType()
export class EnumInternalCTANullableFilter {

    @Field(() => InternalCTA, {nullable:true})
    equals?: `${InternalCTA}`;

    @Field(() => [InternalCTA], {nullable:true})
    in?: Array<`${InternalCTA}`>;

    @Field(() => [InternalCTA], {nullable:true})
    notIn?: Array<`${InternalCTA}`>;

    @Field(() => NestedEnumInternalCTANullableFilter, {nullable:true})
    not?: NestedEnumInternalCTANullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
