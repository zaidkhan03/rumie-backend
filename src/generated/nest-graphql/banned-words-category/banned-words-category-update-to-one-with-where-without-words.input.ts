import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannedWordsCategoryWhereInput } from './banned-words-category-where.input';
import { Type } from 'class-transformer';
import { BannedWordsCategoryUpdateWithoutWordsInput } from './banned-words-category-update-without-words.input';

@InputType()
export class BannedWordsCategoryUpdateToOneWithWhereWithoutWordsInput {

    @Field(() => BannedWordsCategoryWhereInput, {nullable:true})
    @Type(() => BannedWordsCategoryWhereInput)
    where?: BannedWordsCategoryWhereInput;

    @Field(() => BannedWordsCategoryUpdateWithoutWordsInput, {nullable:false})
    @Type(() => BannedWordsCategoryUpdateWithoutWordsInput)
    data!: BannedWordsCategoryUpdateWithoutWordsInput;
}
