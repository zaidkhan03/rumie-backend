import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannedWordsCategoryUpdateInput } from './banned-words-category-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BannedWordsCategoryWhereUniqueInput } from './banned-words-category-where-unique.input';

@ArgsType()
export class UpdateOneBannedWordsCategoryArgs {

    @Field(() => BannedWordsCategoryUpdateInput, {nullable:false})
    @Type(() => BannedWordsCategoryUpdateInput)
    data!: BannedWordsCategoryUpdateInput;

    @Field(() => BannedWordsCategoryWhereUniqueInput, {nullable:false})
    @Type(() => BannedWordsCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<BannedWordsCategoryWhereUniqueInput, 'id' | 'name'>;
}
