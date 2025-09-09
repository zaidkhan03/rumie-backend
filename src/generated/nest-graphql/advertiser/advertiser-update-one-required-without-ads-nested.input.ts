import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdvertiserCreateWithoutAdsInput } from './advertiser-create-without-ads.input';
import { Type } from 'class-transformer';
import { AdvertiserCreateOrConnectWithoutAdsInput } from './advertiser-create-or-connect-without-ads.input';
import { AdvertiserUpsertWithoutAdsInput } from './advertiser-upsert-without-ads.input';
import { Prisma } from '@prisma/client';
import { AdvertiserWhereUniqueInput } from './advertiser-where-unique.input';
import { AdvertiserUpdateToOneWithWhereWithoutAdsInput } from './advertiser-update-to-one-with-where-without-ads.input';

@InputType()
export class AdvertiserUpdateOneRequiredWithoutAdsNestedInput {

    @Field(() => AdvertiserCreateWithoutAdsInput, {nullable:true})
    @Type(() => AdvertiserCreateWithoutAdsInput)
    create?: AdvertiserCreateWithoutAdsInput;

    @Field(() => AdvertiserCreateOrConnectWithoutAdsInput, {nullable:true})
    @Type(() => AdvertiserCreateOrConnectWithoutAdsInput)
    connectOrCreate?: AdvertiserCreateOrConnectWithoutAdsInput;

    @Field(() => AdvertiserUpsertWithoutAdsInput, {nullable:true})
    @Type(() => AdvertiserUpsertWithoutAdsInput)
    upsert?: AdvertiserUpsertWithoutAdsInput;

    @Field(() => AdvertiserWhereUniqueInput, {nullable:true})
    @Type(() => AdvertiserWhereUniqueInput)
    connect?: Prisma.AtLeast<AdvertiserWhereUniqueInput, 'id'>;

    @Field(() => AdvertiserUpdateToOneWithWhereWithoutAdsInput, {nullable:true})
    @Type(() => AdvertiserUpdateToOneWithWhereWithoutAdsInput)
    update?: AdvertiserUpdateToOneWithWhereWithoutAdsInput;
}
