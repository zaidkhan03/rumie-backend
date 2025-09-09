import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdvertiserWhereInput } from './advertiser-where.input';
import { Type } from 'class-transformer';
import { AdvertiserUpdateWithoutAdsInput } from './advertiser-update-without-ads.input';

@InputType()
export class AdvertiserUpdateToOneWithWhereWithoutAdsInput {

    @Field(() => AdvertiserWhereInput, {nullable:true})
    @Type(() => AdvertiserWhereInput)
    where?: AdvertiserWhereInput;

    @Field(() => AdvertiserUpdateWithoutAdsInput, {nullable:false})
    @Type(() => AdvertiserUpdateWithoutAdsInput)
    data!: AdvertiserUpdateWithoutAdsInput;
}
