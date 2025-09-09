import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdWhereUniqueInput } from './ad-where-unique.input';
import { Type } from 'class-transformer';
import { AdUpdateWithoutAdvertiserInput } from './ad-update-without-advertiser.input';

@InputType()
export class AdUpdateWithWhereUniqueWithoutAdvertiserInput {

    @Field(() => AdWhereUniqueInput, {nullable:false})
    @Type(() => AdWhereUniqueInput)
    where!: Prisma.AtLeast<AdWhereUniqueInput, 'id'>;

    @Field(() => AdUpdateWithoutAdvertiserInput, {nullable:false})
    @Type(() => AdUpdateWithoutAdvertiserInput)
    data!: AdUpdateWithoutAdvertiserInput;
}
