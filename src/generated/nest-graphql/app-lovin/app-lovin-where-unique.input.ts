import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppLovinWhereInput } from './app-lovin-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumAppLovingAdTypeFilter } from '../prisma/enum-app-loving-ad-type-filter.input';
import { EnumAppLovinPositionFilter } from '../prisma/enum-app-lovin-position-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AppLovinWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [AppLovinWhereInput], {nullable:true})
    AND?: Array<AppLovinWhereInput>;

    @Field(() => [AppLovinWhereInput], {nullable:true})
    OR?: Array<AppLovinWhereInput>;

    @Field(() => [AppLovinWhereInput], {nullable:true})
    NOT?: Array<AppLovinWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    alias?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    adUnitId?: StringFilter;

    @Field(() => EnumAppLovingAdTypeFilter, {nullable:true})
    type?: EnumAppLovingAdTypeFilter;

    @Field(() => EnumAppLovinPositionFilter, {nullable:true})
    position?: EnumAppLovinPositionFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
