import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppLovinWhereUniqueInput } from './app-lovin-where-unique.input';
import { Type } from 'class-transformer';
import { AppLovinCreateInput } from './app-lovin-create.input';
import { AppLovinUpdateInput } from './app-lovin-update.input';

@ArgsType()
export class UpsertOneAppLovinArgs {

    @Field(() => AppLovinWhereUniqueInput, {nullable:false})
    @Type(() => AppLovinWhereUniqueInput)
    where!: Prisma.AtLeast<AppLovinWhereUniqueInput, 'id'>;

    @Field(() => AppLovinCreateInput, {nullable:false})
    @Type(() => AppLovinCreateInput)
    create!: AppLovinCreateInput;

    @Field(() => AppLovinUpdateInput, {nullable:false})
    @Type(() => AppLovinUpdateInput)
    update!: AppLovinUpdateInput;
}
