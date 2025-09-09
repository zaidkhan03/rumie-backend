import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BannedWordCreateNestedManyWithoutCategoryInput } from '../banned-word/banned-word-create-nested-many-without-category.input';

@InputType()
export class BannedWordsCategoryCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:true})
    severity?: number;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => BannedWordCreateNestedManyWithoutCategoryInput, {nullable:true})
    words?: BannedWordCreateNestedManyWithoutCategoryInput;
}
