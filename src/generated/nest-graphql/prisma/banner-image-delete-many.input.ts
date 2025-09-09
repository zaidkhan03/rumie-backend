import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannerImageWhereInput } from '../banner-image/banner-image-where.input';
import { Type } from 'class-transformer';

@InputType()
export class BannerImageDeleteManyInput {

    @Field(() => BannerImageWhereInput, {nullable:false})
    @Type(() => BannerImageWhereInput)
    where!: BannerImageWhereInput;
}
