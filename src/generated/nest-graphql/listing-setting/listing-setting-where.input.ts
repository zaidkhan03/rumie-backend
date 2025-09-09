import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { NameAndImageObjectEqualityInput } from '../prisma/name-and-image-object-equality.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ListingSettingWhereInput {

    @Field(() => [ListingSettingWhereInput], {nullable:true})
    AND?: Array<ListingSettingWhereInput>;

    @Field(() => [ListingSettingWhereInput], {nullable:true})
    OR?: Array<ListingSettingWhereInput>;

    @Field(() => [ListingSettingWhereInput], {nullable:true})
    NOT?: Array<ListingSettingWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    enableSelling?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    enableRenting?: BoolFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    reasonsForSelling?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    meetupPreferences?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    productDeliveryModes?: StringNullableListFilter;

    @Field(() => IntFilter, {nullable:true})
    sellerFees?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    taxes?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    creditProcessing?: IntFilter;

    @Field(() => [NameAndImageObjectEqualityInput], {nullable:true})
    genders?: Array<NameAndImageObjectEqualityInput>;

    @Field(() => [NameAndImageObjectEqualityInput], {nullable:true})
    conditions?: Array<NameAndImageObjectEqualityInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
