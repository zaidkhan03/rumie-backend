import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CTAType } from './cta-type.enum';

@InputType()
export class NestedEnumCTATypeFilter {

    @Field(() => CTAType, {nullable:true})
    equals?: `${CTAType}`;

    @Field(() => [CTAType], {nullable:true})
    in?: Array<`${CTAType}`>;

    @Field(() => [CTAType], {nullable:true})
    notIn?: Array<`${CTAType}`>;

    @Field(() => NestedEnumCTATypeFilter, {nullable:true})
    not?: NestedEnumCTATypeFilter;
}
