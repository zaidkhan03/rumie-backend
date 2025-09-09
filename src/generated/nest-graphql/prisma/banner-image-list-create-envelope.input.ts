import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannerImageCreateInput } from '../banner-image/banner-image-create.input';
import { Type } from 'class-transformer';

@InputType()
export class BannerImageListCreateEnvelopeInput {

    @Field(() => [BannerImageCreateInput], {nullable:true})
    @Type(() => BannerImageCreateInput)
    set?: Array<BannerImageCreateInput>;
}
