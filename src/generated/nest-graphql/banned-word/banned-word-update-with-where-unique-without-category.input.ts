import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BannedWordWhereUniqueInput } from './banned-word-where-unique.input';
import { Type } from 'class-transformer';
import { BannedWordUpdateWithoutCategoryInput } from './banned-word-update-without-category.input';

@InputType()
export class BannedWordUpdateWithWhereUniqueWithoutCategoryInput {

    @Field(() => BannedWordWhereUniqueInput, {nullable:false})
    @Type(() => BannedWordWhereUniqueInput)
    where!: Prisma.AtLeast<BannedWordWhereUniqueInput, 'id' | 'word'>;

    @Field(() => BannedWordUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => BannedWordUpdateWithoutCategoryInput)
    data!: BannedWordUpdateWithoutCategoryInput;
}
