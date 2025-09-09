import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannedWordsCategoryWhereInput } from './banned-words-category-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBannedWordsCategoryArgs {

    @Field(() => BannedWordsCategoryWhereInput, {nullable:true})
    @Type(() => BannedWordsCategoryWhereInput)
    where?: BannedWordsCategoryWhereInput;
}
