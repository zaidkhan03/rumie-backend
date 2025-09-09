import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppLovingAdType } from './app-loving-ad-type.enum';

@InputType()
export class NestedEnumAppLovingAdTypeFilter {

    @Field(() => AppLovingAdType, {nullable:true})
    equals?: `${AppLovingAdType}`;

    @Field(() => [AppLovingAdType], {nullable:true})
    in?: Array<`${AppLovingAdType}`>;

    @Field(() => [AppLovingAdType], {nullable:true})
    notIn?: Array<`${AppLovingAdType}`>;

    @Field(() => NestedEnumAppLovingAdTypeFilter, {nullable:true})
    not?: NestedEnumAppLovingAdTypeFilter;
}
