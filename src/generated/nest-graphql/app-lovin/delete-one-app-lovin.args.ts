import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppLovinWhereUniqueInput } from './app-lovin-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneAppLovinArgs {

    @Field(() => AppLovinWhereUniqueInput, {nullable:false})
    @Type(() => AppLovinWhereUniqueInput)
    where!: Prisma.AtLeast<AppLovinWhereUniqueInput, 'id'>;
}
