import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppLovingAdType } from './app-loving-ad-type.enum';
import { NestedEnumAppLovingAdTypeFilter } from './nested-enum-app-loving-ad-type-filter.input';

@InputType()
export class EnumAppLovingAdTypeFilter {

    @Field(() => AppLovingAdType, {nullable:true})
    equals?: `${AppLovingAdType}`;

    @Field(() => [AppLovingAdType], {nullable:true})
    in?: Array<`${AppLovingAdType}`>;

    @Field(() => [AppLovingAdType], {nullable:true})
    notIn?: Array<`${AppLovingAdType}`>;

    @Field(() => NestedEnumAppLovingAdTypeFilter, {nullable:true})
    not?: NestedEnumAppLovingAdTypeFilter;
}
