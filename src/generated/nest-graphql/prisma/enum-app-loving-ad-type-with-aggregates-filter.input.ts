import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppLovingAdType } from './app-loving-ad-type.enum';
import { NestedEnumAppLovingAdTypeWithAggregatesFilter } from './nested-enum-app-loving-ad-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAppLovingAdTypeFilter } from './nested-enum-app-loving-ad-type-filter.input';

@InputType()
export class EnumAppLovingAdTypeWithAggregatesFilter {

    @Field(() => AppLovingAdType, {nullable:true})
    equals?: `${AppLovingAdType}`;

    @Field(() => [AppLovingAdType], {nullable:true})
    in?: Array<`${AppLovingAdType}`>;

    @Field(() => [AppLovingAdType], {nullable:true})
    notIn?: Array<`${AppLovingAdType}`>;

    @Field(() => NestedEnumAppLovingAdTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAppLovingAdTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAppLovingAdTypeFilter, {nullable:true})
    _min?: NestedEnumAppLovingAdTypeFilter;

    @Field(() => NestedEnumAppLovingAdTypeFilter, {nullable:true})
    _max?: NestedEnumAppLovingAdTypeFilter;
}
