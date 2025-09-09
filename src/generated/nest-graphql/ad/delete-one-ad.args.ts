import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdWhereUniqueInput } from './ad-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneAdArgs {

    @Field(() => AdWhereUniqueInput, {nullable:false})
    @Type(() => AdWhereUniqueInput)
    where!: Prisma.AtLeast<AdWhereUniqueInput, 'id'>;
}
