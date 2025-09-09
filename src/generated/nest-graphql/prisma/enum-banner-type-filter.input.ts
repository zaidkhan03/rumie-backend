import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannerType } from './banner-type.enum';
import { NestedEnumBannerTypeFilter } from './nested-enum-banner-type-filter.input';

@InputType()
export class EnumBannerTypeFilter {

    @Field(() => BannerType, {nullable:true})
    equals?: `${BannerType}`;

    @Field(() => [BannerType], {nullable:true})
    in?: Array<`${BannerType}`>;

    @Field(() => [BannerType], {nullable:true})
    notIn?: Array<`${BannerType}`>;

    @Field(() => NestedEnumBannerTypeFilter, {nullable:true})
    not?: NestedEnumBannerTypeFilter;
}
