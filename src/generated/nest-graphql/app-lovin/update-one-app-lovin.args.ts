import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppLovinUpdateInput } from './app-lovin-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AppLovinWhereUniqueInput } from './app-lovin-where-unique.input';

@ArgsType()
export class UpdateOneAppLovinArgs {

    @Field(() => AppLovinUpdateInput, {nullable:false})
    @Type(() => AppLovinUpdateInput)
    data!: AppLovinUpdateInput;

    @Field(() => AppLovinWhereUniqueInput, {nullable:false})
    @Type(() => AppLovinWhereUniqueInput)
    where!: Prisma.AtLeast<AppLovinWhereUniqueInput, 'id'>;
}
