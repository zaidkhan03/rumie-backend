import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BannedWord } from '../banned-word/banned-word.model';
import { BannedWordsCategoryCount } from './banned-words-category-count.output';

@ObjectType()
export class BannedWordsCategory {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Int, {defaultValue:1,nullable:false})
    severity!: number;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [BannedWord], {nullable:true})
    words?: Array<BannedWord>;

    @Field(() => BannedWordsCategoryCount, {nullable:false})
    _count?: BannedWordsCategoryCount;
}
