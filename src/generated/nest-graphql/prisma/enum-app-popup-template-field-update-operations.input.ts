import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppPopupTemplate } from './app-popup-template.enum';

@InputType()
export class EnumAppPopupTemplateFieldUpdateOperationsInput {

    @Field(() => AppPopupTemplate, {nullable:true})
    set?: `${AppPopupTemplate}`;
}
