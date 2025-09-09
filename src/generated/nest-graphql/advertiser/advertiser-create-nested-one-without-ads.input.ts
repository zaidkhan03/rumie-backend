import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdvertiserCreateWithoutAdsInput } from './advertiser-create-without-ads.input';
import { Type } from 'class-transformer';
import { AdvertiserCreateOrConnectWithoutAdsInput } from './advertiser-create-or-connect-without-ads.input';
import { Prisma } from '@prisma/client';
import { AdvertiserWhereUniqueInput } from './advertiser-where-unique.input';

@InputType()
export class AdvertiserCreateNestedOneWithoutAdsInput {

    @Field(() => AdvertiserCreateWithoutAdsInput, {nullable:true})
    @Type(() => AdvertiserCreateWithoutAdsInput)
    create?: AdvertiserCreateWithoutAdsInput;

    @Field(() => AdvertiserCreateOrConnectWithoutAdsInput, {nullable:true})
    @Type(() => AdvertiserCreateOrConnectWithoutAdsInput)
    connectOrCreate?: AdvertiserCreateOrConnectWithoutAdsInput;

    @Field(() => AdvertiserWhereUniqueInput, {nullable:true})
    @Type(() => AdvertiserWhereUniqueInput)
    connect?: Prisma.AtLeast<AdvertiserWhereUniqueInput, 'id'>;
}
