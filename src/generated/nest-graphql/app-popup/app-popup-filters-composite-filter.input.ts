import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppPopupFiltersObjectEqualityInput } from './app-popup-filters-object-equality.input';
import { AppPopupFiltersWhereInput } from '../app-popup-filters/app-popup-filters-where.input';

@InputType()
export class AppPopupFiltersCompositeFilter {

    @Field(() => AppPopupFiltersObjectEqualityInput, {nullable:true})
    equals?: AppPopupFiltersObjectEqualityInput;

    @Field(() => AppPopupFiltersWhereInput, {nullable:true})
    is?: AppPopupFiltersWhereInput;

    @Field(() => AppPopupFiltersWhereInput, {nullable:true})
    isNot?: AppPopupFiltersWhereInput;
}
