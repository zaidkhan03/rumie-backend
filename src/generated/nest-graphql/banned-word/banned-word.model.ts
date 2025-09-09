import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { BannedWordsCategory } from '../banned-words-category/banned-words-category.model';

@ObjectType()
export class BannedWord {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    word!: string;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => BannedWordsCategory, {nullable:false})
    category?: BannedWordsCategory;
}
