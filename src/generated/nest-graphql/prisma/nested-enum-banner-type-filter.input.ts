import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannerType } from './banner-type.enum';

@InputType()
export class NestedEnumBannerTypeFilter {

    @Field(() => BannerType, {nullable:true})
    equals?: `${BannerType}`;

    @Field(() => [BannerType], {nullable:true})
    in?: Array<`${BannerType}`>;

    @Field(() => [BannerType], {nullable:true})
    notIn?: Array<`${BannerType}`>;

    @Field(() => NestedEnumBannerTypeFilter, {nullable:true})
    not?: NestedEnumBannerTypeFilter;
}
