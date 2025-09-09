import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannedWordsCategoryCreateNestedOneWithoutWordsInput } from '../banned-words-category/banned-words-category-create-nested-one-without-words.input';

@InputType()
export class BannedWordCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    word!: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => BannedWordsCategoryCreateNestedOneWithoutWordsInput, {nullable:false})
    category!: BannedWordsCategoryCreateNestedOneWithoutWordsInput;
}
