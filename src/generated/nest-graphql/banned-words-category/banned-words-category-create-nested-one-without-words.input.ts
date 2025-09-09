import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannedWordsCategoryCreateWithoutWordsInput } from './banned-words-category-create-without-words.input';
import { Type } from 'class-transformer';
import { BannedWordsCategoryCreateOrConnectWithoutWordsInput } from './banned-words-category-create-or-connect-without-words.input';
import { Prisma } from '@prisma/client';
import { BannedWordsCategoryWhereUniqueInput } from './banned-words-category-where-unique.input';

@InputType()
export class BannedWordsCategoryCreateNestedOneWithoutWordsInput {

    @Field(() => BannedWordsCategoryCreateWithoutWordsInput, {nullable:true})
    @Type(() => BannedWordsCategoryCreateWithoutWordsInput)
    create?: BannedWordsCategoryCreateWithoutWordsInput;

    @Field(() => BannedWordsCategoryCreateOrConnectWithoutWordsInput, {nullable:true})
    @Type(() => BannedWordsCategoryCreateOrConnectWithoutWordsInput)
    connectOrCreate?: BannedWordsCategoryCreateOrConnectWithoutWordsInput;

    @Field(() => BannedWordsCategoryWhereUniqueInput, {nullable:true})
    @Type(() => BannedWordsCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<BannedWordsCategoryWhereUniqueInput, 'id' | 'name'>;
}
