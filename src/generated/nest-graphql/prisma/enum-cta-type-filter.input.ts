import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CTAType } from './cta-type.enum';
import { NestedEnumCTATypeFilter } from './nested-enum-cta-type-filter.input';

@InputType()
export class EnumCTATypeFilter {

    @Field(() => CTAType, {nullable:true})
    equals?: `${CTAType}`;

    @Field(() => [CTAType], {nullable:true})
    in?: Array<`${CTAType}`>;

    @Field(() => [CTAType], {nullable:true})
    notIn?: Array<`${CTAType}`>;

    @Field(() => NestedEnumCTATypeFilter, {nullable:true})
    not?: NestedEnumCTATypeFilter;
}
