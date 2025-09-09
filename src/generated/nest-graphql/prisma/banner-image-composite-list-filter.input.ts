import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannerImageObjectEqualityInput } from './banner-image-object-equality.input';
import { BannerImageWhereInput } from '../banner-image/banner-image-where.input';

@InputType()
export class BannerImageCompositeListFilter {

    @Field(() => [BannerImageObjectEqualityInput], {nullable:true})
    equals?: Array<BannerImageObjectEqualityInput>;

    @Field(() => BannerImageWhereInput, {nullable:true})
    every?: BannerImageWhereInput;

    @Field(() => BannerImageWhereInput, {nullable:true})
    some?: BannerImageWhereInput;

    @Field(() => BannerImageWhereInput, {nullable:true})
    none?: BannerImageWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
