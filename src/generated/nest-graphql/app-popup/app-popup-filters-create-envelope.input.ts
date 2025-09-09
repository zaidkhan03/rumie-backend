import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppPopupFiltersCreateInput } from '../app-popup-filters/app-popup-filters-create.input';
import { Type } from 'class-transformer';

@InputType()
export class AppPopupFiltersCreateEnvelopeInput {

    @Field(() => AppPopupFiltersCreateInput, {nullable:true})
    @Type(() => AppPopupFiltersCreateInput)
    set?: AppPopupFiltersCreateInput;
}
