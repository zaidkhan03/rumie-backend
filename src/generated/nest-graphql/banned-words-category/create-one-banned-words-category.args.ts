import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannedWordsCategoryCreateInput } from './banned-words-category-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBannedWordsCategoryArgs {

    @Field(() => BannedWordsCategoryCreateInput, {nullable:false})
    @Type(() => BannedWordsCategoryCreateInput)
    data!: BannedWordsCategoryCreateInput;
}
