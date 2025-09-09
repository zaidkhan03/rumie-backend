import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppPopupWhereUniqueInput } from './app-popup-where-unique.input';
import { Type } from 'class-transformer';
import { AppPopupCreateInput } from './app-popup-create.input';
import { AppPopupUpdateInput } from './app-popup-update.input';

@ArgsType()
export class UpsertOneAppPopupArgs {

    @Field(() => AppPopupWhereUniqueInput, {nullable:false})
    @Type(() => AppPopupWhereUniqueInput)
    where!: Prisma.AtLeast<AppPopupWhereUniqueInput, 'id'>;

    @Field(() => AppPopupCreateInput, {nullable:false})
    @Type(() => AppPopupCreateInput)
    create!: AppPopupCreateInput;

    @Field(() => AppPopupUpdateInput, {nullable:false})
    @Type(() => AppPopupUpdateInput)
    update!: AppPopupUpdateInput;
}
