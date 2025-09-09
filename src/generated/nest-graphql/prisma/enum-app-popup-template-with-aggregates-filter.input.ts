import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppPopupTemplate } from './app-popup-template.enum';
import { NestedEnumAppPopupTemplateWithAggregatesFilter } from './nested-enum-app-popup-template-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAppPopupTemplateFilter } from './nested-enum-app-popup-template-filter.input';

@InputType()
export class EnumAppPopupTemplateWithAggregatesFilter {

    @Field(() => AppPopupTemplate, {nullable:true})
    equals?: `${AppPopupTemplate}`;

    @Field(() => [AppPopupTemplate], {nullable:true})
    in?: Array<`${AppPopupTemplate}`>;

    @Field(() => [AppPopupTemplate], {nullable:true})
    notIn?: Array<`${AppPopupTemplate}`>;

    @Field(() => NestedEnumAppPopupTemplateWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAppPopupTemplateWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAppPopupTemplateFilter, {nullable:true})
    _min?: NestedEnumAppPopupTemplateFilter;

    @Field(() => NestedEnumAppPopupTemplateFilter, {nullable:true})
    _max?: NestedEnumAppPopupTemplateFilter;
}
