import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannerImageObjectEqualityInput } from './banner-image-object-equality.input';
import { BannerImageWhereInput } from '../banner-image/banner-image-where.input';

@InputType()
export class BannerImageCompositeFilter {

    @Field(() => BannerImageObjectEqualityInput, {nullable:true})
    equals?: BannerImageObjectEqualityInput;

    @Field(() => BannerImageWhereInput, {nullable:true})
    is?: BannerImageWhereInput;

    @Field(() => BannerImageWhereInput, {nullable:true})
    isNot?: BannerImageWhereInput;
}
