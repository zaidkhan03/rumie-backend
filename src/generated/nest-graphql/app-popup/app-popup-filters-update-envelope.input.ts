import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppPopupFiltersCreateInput } from '../app-popup-filters/app-popup-filters-create.input';
import { Type } from 'class-transformer';
import { AppPopupFiltersUpdateInput } from '../app-popup-filters/app-popup-filters-update.input';

@InputType()
export class AppPopupFiltersUpdateEnvelopeInput {

    @Field(() => AppPopupFiltersCreateInput, {nullable:true})
    @Type(() => AppPopupFiltersCreateInput)
    set?: AppPopupFiltersCreateInput;

    @Field(() => AppPopupFiltersUpdateInput, {nullable:true})
    @Type(() => AppPopupFiltersUpdateInput)
    update?: AppPopupFiltersUpdateInput;
}
