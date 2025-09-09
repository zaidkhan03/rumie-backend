import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannerImageCreateInput } from './banner-image-create.input';
import { Type } from 'class-transformer';
import { BannerImageUpdateInput } from './banner-image-update.input';

@InputType()
export class BannerImageUpdateEnvelopeInput {

    @Field(() => BannerImageCreateInput, {nullable:true})
    @Type(() => BannerImageCreateInput)
    set?: BannerImageCreateInput;

    @Field(() => BannerImageUpdateInput, {nullable:true})
    @Type(() => BannerImageUpdateInput)
    update?: BannerImageUpdateInput;
}
