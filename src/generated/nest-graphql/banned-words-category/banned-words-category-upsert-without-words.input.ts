import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannedWordsCategoryUpdateWithoutWordsInput } from './banned-words-category-update-without-words.input';
import { Type } from 'class-transformer';
import { BannedWordsCategoryCreateWithoutWordsInput } from './banned-words-category-create-without-words.input';
import { BannedWordsCategoryWhereInput } from './banned-words-category-where.input';

@InputType()
export class BannedWordsCategoryUpsertWithoutWordsInput {

    @Field(() => BannedWordsCategoryUpdateWithoutWordsInput, {nullable:false})
    @Type(() => BannedWordsCategoryUpdateWithoutWordsInput)
    update!: BannedWordsCategoryUpdateWithoutWordsInput;

    @Field(() => BannedWordsCategoryCreateWithoutWordsInput, {nullable:false})
    @Type(() => BannedWordsCategoryCreateWithoutWordsInput)
    create!: BannedWordsCategoryCreateWithoutWordsInput;

    @Field(() => BannedWordsCategoryWhereInput, {nullable:true})
    @Type(() => BannedWordsCategoryWhereInput)
    where?: BannedWordsCategoryWhereInput;
}
