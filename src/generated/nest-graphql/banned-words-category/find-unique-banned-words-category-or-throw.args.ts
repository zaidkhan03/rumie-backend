import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BannedWordsCategoryWhereUniqueInput } from './banned-words-category-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueBannedWordsCategoryOrThrowArgs {

    @Field(() => BannedWordsCategoryWhereUniqueInput, {nullable:false})
    @Type(() => BannedWordsCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<BannedWordsCategoryWhereUniqueInput, 'id' | 'name'>;
}
