import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdvertiserWhereUniqueInput } from './advertiser-where-unique.input';
import { Type } from 'class-transformer';
import { AdvertiserCreateWithoutAdsInput } from './advertiser-create-without-ads.input';

@InputType()
export class AdvertiserCreateOrConnectWithoutAdsInput {

    @Field(() => AdvertiserWhereUniqueInput, {nullable:false})
    @Type(() => AdvertiserWhereUniqueInput)
    where!: Prisma.AtLeast<AdvertiserWhereUniqueInput, 'id'>;

    @Field(() => AdvertiserCreateWithoutAdsInput, {nullable:false})
    @Type(() => AdvertiserCreateWithoutAdsInput)
    create!: AdvertiserCreateWithoutAdsInput;
}
