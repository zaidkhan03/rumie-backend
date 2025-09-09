import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ListingSettingWhereUniqueInput } from './listing-setting-where-unique.input';
import { Type } from 'class-transformer';
import { ListingSettingCreateInput } from './listing-setting-create.input';
import { ListingSettingUpdateInput } from './listing-setting-update.input';

@ArgsType()
export class UpsertOneListingSettingArgs {

    @Field(() => ListingSettingWhereUniqueInput, {nullable:false})
    @Type(() => ListingSettingWhereUniqueInput)
    where!: Prisma.AtLeast<ListingSettingWhereUniqueInput, 'id'>;

    @Field(() => ListingSettingCreateInput, {nullable:false})
    @Type(() => ListingSettingCreateInput)
    create!: ListingSettingCreateInput;

    @Field(() => ListingSettingUpdateInput, {nullable:false})
    @Type(() => ListingSettingUpdateInput)
    update!: ListingSettingUpdateInput;
}
