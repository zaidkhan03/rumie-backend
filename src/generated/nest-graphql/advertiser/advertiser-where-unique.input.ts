import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdvertiserWhereInput } from './advertiser-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { AdvertiserPOCCompositeFilter } from '../prisma/advertiser-poc-composite-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { AdListRelationFilter } from '../ad/ad-list-relation-filter.input';

@InputType()
export class AdvertiserWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [AdvertiserWhereInput], {nullable:true})
    AND?: Array<AdvertiserWhereInput>;

    @Field(() => [AdvertiserWhereInput], {nullable:true})
    OR?: Array<AdvertiserWhereInput>;

    @Field(() => [AdvertiserWhereInput], {nullable:true})
    NOT?: Array<AdvertiserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    companyName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    companyWebsiteUrl?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    logo?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    address1?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    address2?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    city?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    state?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    zip?: StringFilter;

    @Field(() => AdvertiserPOCCompositeFilter, {nullable:true})
    pointOfContact?: AdvertiserPOCCompositeFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => AdListRelationFilter, {nullable:true})
    ads?: AdListRelationFilter;
}
