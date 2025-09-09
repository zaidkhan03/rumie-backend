import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdvertiserWhereUniqueInput } from './advertiser-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAdvertiserArgs {

    @Field(() => AdvertiserWhereUniqueInput, {nullable:false})
    @Type(() => AdvertiserWhereUniqueInput)
    where!: Prisma.AtLeast<AdvertiserWhereUniqueInput, 'id'>;
}
