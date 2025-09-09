import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppPopupCreateManyInput } from './app-popup-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAppPopupArgs {

    @Field(() => [AppPopupCreateManyInput], {nullable:false})
    @Type(() => AppPopupCreateManyInput)
    data!: Array<AppPopupCreateManyInput>;
}
