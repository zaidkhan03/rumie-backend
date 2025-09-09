import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BannedWordsCategoryRelationFilter } from '../banned-words-category/banned-words-category-relation-filter.input';

@InputType()
export class BannedWordWhereInput {

    @Field(() => [BannedWordWhereInput], {nullable:true})
    AND?: Array<BannedWordWhereInput>;

    @Field(() => [BannedWordWhereInput], {nullable:true})
    OR?: Array<BannedWordWhereInput>;

    @Field(() => [BannedWordWhereInput], {nullable:true})
    NOT?: Array<BannedWordWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    word?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    categoryId?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BannedWordsCategoryRelationFilter, {nullable:true})
    category?: BannedWordsCategoryRelationFilter;
}
