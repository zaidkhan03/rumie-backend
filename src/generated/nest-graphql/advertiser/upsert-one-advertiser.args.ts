import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdvertiserWhereUniqueInput } from './advertiser-where-unique.input';
import { Type } from 'class-transformer';
import { AdvertiserCreateInput } from './advertiser-create.input';
import { AdvertiserUpdateInput } from './advertiser-update.input';

@ArgsType()
export class UpsertOneAdvertiserArgs {

    @Field(() => AdvertiserWhereUniqueInput, {nullable:false})
    @Type(() => AdvertiserWhereUniqueInput)
    where!: Prisma.AtLeast<AdvertiserWhereUniqueInput, 'id'>;

    @Field(() => AdvertiserCreateInput, {nullable:false})
    @Type(() => AdvertiserCreateInput)
    create!: AdvertiserCreateInput;

    @Field(() => AdvertiserUpdateInput, {nullable:false})
    @Type(() => AdvertiserUpdateInput)
    update!: AdvertiserUpdateInput;
}
