import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdWhereUniqueInput } from './ad-where-unique.input';
import { Type } from 'class-transformer';
import { AdUpdateWithoutAdvertiserInput } from './ad-update-without-advertiser.input';
import { AdCreateWithoutAdvertiserInput } from './ad-create-without-advertiser.input';

@InputType()
export class AdUpsertWithWhereUniqueWithoutAdvertiserInput {

    @Field(() => AdWhereUniqueInput, {nullable:false})
    @Type(() => AdWhereUniqueInput)
    where!: Prisma.AtLeast<AdWhereUniqueInput, 'id'>;

    @Field(() => AdUpdateWithoutAdvertiserInput, {nullable:false})
    @Type(() => AdUpdateWithoutAdvertiserInput)
    update!: AdUpdateWithoutAdvertiserInput;

    @Field(() => AdCreateWithoutAdvertiserInput, {nullable:false})
    @Type(() => AdCreateWithoutAdvertiserInput)
    create!: AdCreateWithoutAdvertiserInput;
}
