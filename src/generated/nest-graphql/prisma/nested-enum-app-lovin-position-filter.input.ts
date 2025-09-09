import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppLovinPosition } from './app-lovin-position.enum';

@InputType()
export class NestedEnumAppLovinPositionFilter {

    @Field(() => AppLovinPosition, {nullable:true})
    equals?: `${AppLovinPosition}`;

    @Field(() => [AppLovinPosition], {nullable:true})
    in?: Array<`${AppLovinPosition}`>;

    @Field(() => [AppLovinPosition], {nullable:true})
    notIn?: Array<`${AppLovinPosition}`>;

    @Field(() => NestedEnumAppLovinPositionFilter, {nullable:true})
    not?: NestedEnumAppLovinPositionFilter;
}
