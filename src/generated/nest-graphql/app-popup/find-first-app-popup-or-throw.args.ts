import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppPopupWhereInput } from './app-popup-where.input';
import { Type } from 'class-transformer';
import { AppPopupOrderByWithRelationInput } from './app-popup-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AppPopupWhereUniqueInput } from './app-popup-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AppPopupScalarFieldEnum } from './app-popup-scalar-field.enum';

@ArgsType()
export class FindFirstAppPopupOrThrowArgs {

    @Field(() => AppPopupWhereInput, {nullable:true})
    @Type(() => AppPopupWhereInput)
    where?: AppPopupWhereInput;

    @Field(() => [AppPopupOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AppPopupOrderByWithRelationInput>;

    @Field(() => AppPopupWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AppPopupWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AppPopupScalarFieldEnum], {nullable:true})
    distinct?: Array<`${AppPopupScalarFieldEnum}`>;
}
