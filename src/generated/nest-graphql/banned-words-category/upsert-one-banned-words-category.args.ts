import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BannedWordsCategoryWhereUniqueInput } from './banned-words-category-where-unique.input';
import { Type } from 'class-transformer';
import { BannedWordsCategoryCreateInput } from './banned-words-category-create.input';
import { BannedWordsCategoryUpdateInput } from './banned-words-category-update.input';

@ArgsType()
export class UpsertOneBannedWordsCategoryArgs {

    @Field(() => BannedWordsCategoryWhereUniqueInput, {nullable:false})
    @Type(() => BannedWordsCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<BannedWordsCategoryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => BannedWordsCategoryCreateInput, {nullable:false})
    @Type(() => BannedWordsCategoryCreateInput)
    create!: BannedWordsCategoryCreateInput;

    @Field(() => BannedWordsCategoryUpdateInput, {nullable:false})
    @Type(() => BannedWordsCategoryUpdateInput)
    update!: BannedWordsCategoryUpdateInput;
}
