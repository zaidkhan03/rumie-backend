import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumAppLovingAdTypeWithAggregatesFilter } from '../prisma/enum-app-loving-ad-type-with-aggregates-filter.input';
import { EnumAppLovinPositionWithAggregatesFilter } from '../prisma/enum-app-lovin-position-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AppLovinScalarWhereWithAggregatesInput {

    @Field(() => [AppLovinScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AppLovinScalarWhereWithAggregatesInput>;

    @Field(() => [AppLovinScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AppLovinScalarWhereWithAggregatesInput>;

    @Field(() => [AppLovinScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AppLovinScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    alias?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    adUnitId?: StringWithAggregatesFilter;

    @Field(() => EnumAppLovingAdTypeWithAggregatesFilter, {nullable:true})
    type?: EnumAppLovingAdTypeWithAggregatesFilter;

    @Field(() => EnumAppLovinPositionWithAggregatesFilter, {nullable:true})
    position?: EnumAppLovinPositionWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    active?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
