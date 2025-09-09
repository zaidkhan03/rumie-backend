import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BannedWordListRelationFilter } from '../banned-word/banned-word-list-relation-filter.input';

@InputType()
export class BannedWordsCategoryWhereInput {

    @Field(() => [BannedWordsCategoryWhereInput], {nullable:true})
    AND?: Array<BannedWordsCategoryWhereInput>;

    @Field(() => [BannedWordsCategoryWhereInput], {nullable:true})
    OR?: Array<BannedWordsCategoryWhereInput>;

    @Field(() => [BannedWordsCategoryWhereInput], {nullable:true})
    NOT?: Array<BannedWordsCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    severity?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BannedWordListRelationFilter, {nullable:true})
    words?: BannedWordListRelationFilter;
}
