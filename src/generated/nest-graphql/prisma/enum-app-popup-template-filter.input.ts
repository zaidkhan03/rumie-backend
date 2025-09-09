import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppPopupTemplate } from './app-popup-template.enum';
import { NestedEnumAppPopupTemplateFilter } from './nested-enum-app-popup-template-filter.input';

@InputType()
export class EnumAppPopupTemplateFilter {

    @Field(() => AppPopupTemplate, {nullable:true})
    equals?: `${AppPopupTemplate}`;

    @Field(() => [AppPopupTemplate], {nullable:true})
    in?: Array<`${AppPopupTemplate}`>;

    @Field(() => [AppPopupTemplate], {nullable:true})
    notIn?: Array<`${AppPopupTemplate}`>;

    @Field(() => NestedEnumAppPopupTemplateFilter, {nullable:true})
    not?: NestedEnumAppPopupTemplateFilter;
}
