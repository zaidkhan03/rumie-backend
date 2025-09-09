import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannerType } from './banner-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumBannerTypeFilter } from './nested-enum-banner-type-filter.input';

@InputType()
export class NestedEnumBannerTypeWithAggregatesFilter {

    @Field(() => BannerType, {nullable:true})
    equals?: `${BannerType}`;

    @Field(() => [BannerType], {nullable:true})
    in?: Array<`${BannerType}`>;

    @Field(() => [BannerType], {nullable:true})
    notIn?: Array<`${BannerType}`>;

    @Field(() => NestedEnumBannerTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumBannerTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumBannerTypeFilter, {nullable:true})
    _min?: NestedEnumBannerTypeFilter;

    @Field(() => NestedEnumBannerTypeFilter, {nullable:true})
    _max?: NestedEnumBannerTypeFilter;
}
