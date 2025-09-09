import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListingSettingUpdateInput } from './listing-setting-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ListingSettingWhereUniqueInput } from './listing-setting-where-unique.input';

@ArgsType()
export class UpdateOneListingSettingArgs {

    @Field(() => ListingSettingUpdateInput, {nullable:false})
    @Type(() => ListingSettingUpdateInput)
    data!: ListingSettingUpdateInput;

    @Field(() => ListingSettingWhereUniqueInput, {nullable:false})
    @Type(() => ListingSettingWhereUniqueInput)
    where!: Prisma.AtLeast<ListingSettingWhereUniqueInput, 'id'>;
}
