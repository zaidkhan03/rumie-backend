import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannerImageCreateInput } from '../banner-image/banner-image-create.input';
import { Type } from 'class-transformer';
import { BannerImageUpdateManyInput } from '../banner-image/banner-image-update-many.input';
import { BannerImageDeleteManyInput } from './banner-image-delete-many.input';

@InputType()
export class BannerImageListUpdateEnvelopeInput {

    @Field(() => [BannerImageCreateInput], {nullable:true})
    @Type(() => BannerImageCreateInput)
    set?: Array<BannerImageCreateInput>;

    @Field(() => [BannerImageCreateInput], {nullable:true})
    push?: Array<BannerImageCreateInput>;

    @Field(() => BannerImageUpdateManyInput, {nullable:true})
    @Type(() => BannerImageUpdateManyInput)
    updateMany?: BannerImageUpdateManyInput;

    @Field(() => BannerImageDeleteManyInput, {nullable:true})
    @Type(() => BannerImageDeleteManyInput)
    deleteMany?: BannerImageDeleteManyInput;
}
