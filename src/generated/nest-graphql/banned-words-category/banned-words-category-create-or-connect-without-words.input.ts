import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BannedWordsCategoryWhereUniqueInput } from './banned-words-category-where-unique.input';
import { Type } from 'class-transformer';
import { BannedWordsCategoryCreateWithoutWordsInput } from './banned-words-category-create-without-words.input';

@InputType()
export class BannedWordsCategoryCreateOrConnectWithoutWordsInput {

    @Field(() => BannedWordsCategoryWhereUniqueInput, {nullable:false})
    @Type(() => BannedWordsCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<BannedWordsCategoryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => BannedWordsCategoryCreateWithoutWordsInput, {nullable:false})
    @Type(() => BannedWordsCategoryCreateWithoutWordsInput)
    create!: BannedWordsCategoryCreateWithoutWordsInput;
}
