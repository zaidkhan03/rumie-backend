import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannedWordWhereInput } from './banned-word-where.input';

@InputType()
export class BannedWordListRelationFilter {

    @Field(() => BannedWordWhereInput, {nullable:true})
    every?: BannedWordWhereInput;

    @Field(() => BannedWordWhereInput, {nullable:true})
    some?: BannedWordWhereInput;

    @Field(() => BannedWordWhereInput, {nullable:true})
    none?: BannedWordWhereInput;
}
