import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppPopupWhereUniqueInput } from './app-popup-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAppPopupArgs {

    @Field(() => AppPopupWhereUniqueInput, {nullable:false})
    @Type(() => AppPopupWhereUniqueInput)
    where!: Prisma.AtLeast<AppPopupWhereUniqueInput, 'id'>;
}
