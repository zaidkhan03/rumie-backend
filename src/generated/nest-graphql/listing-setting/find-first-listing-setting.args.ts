import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListingSettingWhereInput } from './listing-setting-where.input';
import { Type } from 'class-transformer';
import { ListingSettingOrderByWithRelationInput } from './listing-setting-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ListingSettingWhereUniqueInput } from './listing-setting-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ListingSettingScalarFieldEnum } from './listing-setting-scalar-field.enum';

@ArgsType()
export class FindFirstListingSettingArgs {

    @Field(() => ListingSettingWhereInput, {nullable:true})
    @Type(() => ListingSettingWhereInput)
    where?: ListingSettingWhereInput;

    @Field(() => [ListingSettingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ListingSettingOrderByWithRelationInput>;

    @Field(() => ListingSettingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ListingSettingWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ListingSettingScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ListingSettingScalarFieldEnum}`>;
}
