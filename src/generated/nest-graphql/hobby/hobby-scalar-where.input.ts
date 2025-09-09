import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class HobbyScalarWhereInput {

    @Field(() => [HobbyScalarWhereInput], {nullable:true})
    AND?: Array<HobbyScalarWhereInput>;

    @Field(() => [HobbyScalarWhereInput], {nullable:true})
    OR?: Array<HobbyScalarWhereInput>;

    @Field(() => [HobbyScalarWhereInput], {nullable:true})
    NOT?: Array<HobbyScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    userIds?: StringNullableListFilter;
}
