import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppLovinPosition } from './app-lovin-position.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAppLovinPositionFilter } from './nested-enum-app-lovin-position-filter.input';

@InputType()
export class NestedEnumAppLovinPositionWithAggregatesFilter {

    @Field(() => AppLovinPosition, {nullable:true})
    equals?: `${AppLovinPosition}`;

    @Field(() => [AppLovinPosition], {nullable:true})
    in?: Array<`${AppLovinPosition}`>;

    @Field(() => [AppLovinPosition], {nullable:true})
    notIn?: Array<`${AppLovinPosition}`>;

    @Field(() => NestedEnumAppLovinPositionWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAppLovinPositionWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAppLovinPositionFilter, {nullable:true})
    _min?: NestedEnumAppLovinPositionFilter;

    @Field(() => NestedEnumAppLovinPositionFilter, {nullable:true})
    _max?: NestedEnumAppLovinPositionFilter;
}
