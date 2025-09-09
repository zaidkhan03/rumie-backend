import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppLovinWhereInput } from './app-lovin-where.input';
import { Type } from 'class-transformer';
import { AppLovinOrderByWithRelationInput } from './app-lovin-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AppLovinWhereUniqueInput } from './app-lovin-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AppLovinScalarFieldEnum } from './app-lovin-scalar-field.enum';

@ArgsType()
export class FindFirstAppLovinOrThrowArgs {

    @Field(() => AppLovinWhereInput, {nullable:true})
    @Type(() => AppLovinWhereInput)
    where?: AppLovinWhereInput;

    @Field(() => [AppLovinOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AppLovinOrderByWithRelationInput>;

    @Field(() => AppLovinWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AppLovinWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AppLovinScalarFieldEnum], {nullable:true})
    distinct?: Array<`${AppLovinScalarFieldEnum}`>;
}
