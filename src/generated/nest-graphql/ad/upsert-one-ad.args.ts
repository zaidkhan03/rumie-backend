import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdWhereUniqueInput } from './ad-where-unique.input';
import { Type } from 'class-transformer';
import { AdCreateInput } from './ad-create.input';
import { AdUpdateInput } from './ad-update.input';

@ArgsType()
export class UpsertOneAdArgs {

    @Field(() => AdWhereUniqueInput, {nullable:false})
    @Type(() => AdWhereUniqueInput)
    where!: Prisma.AtLeast<AdWhereUniqueInput, 'id'>;

    @Field(() => AdCreateInput, {nullable:false})
    @Type(() => AdCreateInput)
    create!: AdCreateInput;

    @Field(() => AdUpdateInput, {nullable:false})
    @Type(() => AdUpdateInput)
    update!: AdUpdateInput;
}
