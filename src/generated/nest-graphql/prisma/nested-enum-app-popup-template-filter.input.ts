import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppPopupTemplate } from './app-popup-template.enum';

@InputType()
export class NestedEnumAppPopupTemplateFilter {

    @Field(() => AppPopupTemplate, {nullable:true})
    equals?: `${AppPopupTemplate}`;

    @Field(() => [AppPopupTemplate], {nullable:true})
    in?: Array<`${AppPopupTemplate}`>;

    @Field(() => [AppPopupTemplate], {nullable:true})
    notIn?: Array<`${AppPopupTemplate}`>;

    @Field(() => NestedEnumAppPopupTemplateFilter, {nullable:true})
    not?: NestedEnumAppPopupTemplateFilter;
}
