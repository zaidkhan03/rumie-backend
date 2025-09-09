import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdvertiserUpdateInput } from './advertiser-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AdvertiserWhereUniqueInput } from './advertiser-where-unique.input';

@ArgsType()
export class UpdateOneAdvertiserArgs {

    @Field(() => AdvertiserUpdateInput, {nullable:false})
    @Type(() => AdvertiserUpdateInput)
    data!: AdvertiserUpdateInput;

    @Field(() => AdvertiserWhereUniqueInput, {nullable:false})
    @Type(() => AdvertiserWhereUniqueInput)
    where!: Prisma.AtLeast<AdvertiserWhereUniqueInput, 'id'>;
}
