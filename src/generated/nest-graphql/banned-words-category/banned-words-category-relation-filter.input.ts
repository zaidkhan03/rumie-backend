import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannedWordsCategoryWhereInput } from './banned-words-category-where.input';

@InputType()
export class BannedWordsCategoryRelationFilter {

    @Field(() => BannedWordsCategoryWhereInput, {nullable:true})
    is?: BannedWordsCategoryWhereInput;

    @Field(() => BannedWordsCategoryWhereInput, {nullable:true})
    isNot?: BannedWordsCategoryWhereInput;
}
