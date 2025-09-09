import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannedWordsCategoryWhereInput } from './banned-words-category-where.input';
import { Type } from 'class-transformer';
import { BannedWordsCategoryOrderByWithRelationInput } from './banned-words-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BannedWordsCategoryWhereUniqueInput } from './banned-words-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BannedWordsCategoryScalarFieldEnum } from './banned-words-category-scalar-field.enum';

@ArgsType()
export class FindFirstBannedWordsCategoryArgs {

    @Field(() => BannedWordsCategoryWhereInput, {nullable:true})
    @Type(() => BannedWordsCategoryWhereInput)
    where?: BannedWordsCategoryWhereInput;

    @Field(() => [BannedWordsCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BannedWordsCategoryOrderByWithRelationInput>;

    @Field(() => BannedWordsCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BannedWordsCategoryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BannedWordsCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<`${BannedWordsCategoryScalarFieldEnum}`>;
}
