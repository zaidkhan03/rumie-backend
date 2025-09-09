import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannerImageWhereInput } from './banner-image-where.input';
import { Type } from 'class-transformer';
import { BannerImageUpdateInput } from './banner-image-update.input';

@InputType()
export class BannerImageUpdateManyInput {

    @Field(() => BannerImageWhereInput, {nullable:false})
    @Type(() => BannerImageWhereInput)
    where!: BannerImageWhereInput;

    @Field(() => BannerImageUpdateInput, {nullable:false})
    @Type(() => BannerImageUpdateInput)
    data!: BannerImageUpdateInput;
}
