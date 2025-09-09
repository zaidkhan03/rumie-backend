import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannedWordsCategoryCreateManyInput } from './banned-words-category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBannedWordsCategoryArgs {

    @Field(() => [BannedWordsCategoryCreateManyInput], {nullable:false})
    @Type(() => BannedWordsCategoryCreateManyInput)
    data!: Array<BannedWordsCategoryCreateManyInput>;
}
