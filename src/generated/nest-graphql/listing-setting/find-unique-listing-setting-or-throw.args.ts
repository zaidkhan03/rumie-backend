import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ListingSettingWhereUniqueInput } from './listing-setting-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueListingSettingOrThrowArgs {

    @Field(() => ListingSettingWhereUniqueInput, {nullable:false})
    @Type(() => ListingSettingWhereUniqueInput)
    where!: Prisma.AtLeast<ListingSettingWhereUniqueInput, 'id'>;
}
