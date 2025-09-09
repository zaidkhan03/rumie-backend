import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdvertiserUpdateWithoutAdsInput } from './advertiser-update-without-ads.input';
import { Type } from 'class-transformer';
import { AdvertiserCreateWithoutAdsInput } from './advertiser-create-without-ads.input';
import { AdvertiserWhereInput } from './advertiser-where.input';

@InputType()
export class AdvertiserUpsertWithoutAdsInput {

    @Field(() => AdvertiserUpdateWithoutAdsInput, {nullable:false})
    @Type(() => AdvertiserUpdateWithoutAdsInput)
    update!: AdvertiserUpdateWithoutAdsInput;

    @Field(() => AdvertiserCreateWithoutAdsInput, {nullable:false})
    @Type(() => AdvertiserCreateWithoutAdsInput)
    create!: AdvertiserCreateWithoutAdsInput;

    @Field(() => AdvertiserWhereInput, {nullable:true})
    @Type(() => AdvertiserWhereInput)
    where?: AdvertiserWhereInput;
}
