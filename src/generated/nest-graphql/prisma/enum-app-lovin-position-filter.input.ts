import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppLovinPosition } from './app-lovin-position.enum';
import { NestedEnumAppLovinPositionFilter } from './nested-enum-app-lovin-position-filter.input';

@InputType()
export class EnumAppLovinPositionFilter {

    @Field(() => AppLovinPosition, {nullable:true})
    equals?: `${AppLovinPosition}`;

    @Field(() => [AppLovinPosition], {nullable:true})
    in?: Array<`${AppLovinPosition}`>;

    @Field(() => [AppLovinPosition], {nullable:true})
    notIn?: Array<`${AppLovinPosition}`>;

    @Field(() => NestedEnumAppLovinPositionFilter, {nullable:true})
    not?: NestedEnumAppLovinPositionFilter;
}
