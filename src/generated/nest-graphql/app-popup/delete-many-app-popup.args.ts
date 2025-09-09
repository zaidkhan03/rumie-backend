import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppPopupWhereInput } from './app-popup-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAppPopupArgs {

    @Field(() => AppPopupWhereInput, {nullable:true})
    @Type(() => AppPopupWhereInput)
    where?: AppPopupWhereInput;
}
