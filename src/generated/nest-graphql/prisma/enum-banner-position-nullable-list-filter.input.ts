import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannerPosition } from './banner-position.enum';

@InputType()
export class EnumBannerPositionNullableListFilter {

    @Field(() => [BannerPosition], {nullable:true})
    equals?: Array<`${BannerPosition}`>;

    @Field(() => BannerPosition, {nullable:true})
    has?: `${BannerPosition}`;

    @Field(() => [BannerPosition], {nullable:true})
    hasEvery?: Array<`${BannerPosition}`>;

    @Field(() => [BannerPosition], {nullable:true})
    hasSome?: Array<`${BannerPosition}`>;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}
