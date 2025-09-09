import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppPopupUpdateInput } from './app-popup-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AppPopupWhereUniqueInput } from './app-popup-where-unique.input';

@ArgsType()
export class UpdateOneAppPopupArgs {

    @Field(() => AppPopupUpdateInput, {nullable:false})
    @Type(() => AppPopupUpdateInput)
    data!: AppPopupUpdateInput;

    @Field(() => AppPopupWhereUniqueInput, {nullable:false})
    @Type(() => AppPopupWhereUniqueInput)
    where!: Prisma.AtLeast<AppPopupWhereUniqueInput, 'id'>;
}
