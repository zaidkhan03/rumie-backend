import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BannedWordWhereUniqueInput } from './banned-word-where-unique.input';
import { Type } from 'class-transformer';
import { BannedWordCreateWithoutCategoryInput } from './banned-word-create-without-category.input';

@InputType()
export class BannedWordCreateOrConnectWithoutCategoryInput {

    @Field(() => BannedWordWhereUniqueInput, {nullable:false})
    @Type(() => BannedWordWhereUniqueInput)
    where!: Prisma.AtLeast<BannedWordWhereUniqueInput, 'id' | 'word'>;

    @Field(() => BannedWordCreateWithoutCategoryInput, {nullable:false})
    @Type(() => BannedWordCreateWithoutCategoryInput)
    create!: BannedWordCreateWithoutCategoryInput;
}
