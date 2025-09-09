import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppPopupCreateInput } from './app-popup-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAppPopupArgs {

    @Field(() => AppPopupCreateInput, {nullable:false})
    @Type(() => AppPopupCreateInput)
    data!: AppPopupCreateInput;
}
