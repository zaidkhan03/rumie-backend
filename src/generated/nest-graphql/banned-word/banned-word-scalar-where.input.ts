import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BannedWordScalarWhereInput {

    @Field(() => [BannedWordScalarWhereInput], {nullable:true})
    AND?: Array<BannedWordScalarWhereInput>;

    @Field(() => [BannedWordScalarWhereInput], {nullable:true})
    OR?: Array<BannedWordScalarWhereInput>;

    @Field(() => [BannedWordScalarWhereInput], {nullable:true})
    NOT?: Array<BannedWordScalarWhereInput>;

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
}
