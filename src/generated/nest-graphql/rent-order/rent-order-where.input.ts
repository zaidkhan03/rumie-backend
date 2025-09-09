import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class RentOrderWhereInput {

    @Field(() => [RentOrderWhereInput], {nullable:true})
    AND?: Array<RentOrderWhereInput>;

    @Field(() => [RentOrderWhereInput], {nullable:true})
    OR?: Array<RentOrderWhereInput>;

    @Field(() => [RentOrderWhereInput], {nullable:true})
    NOT?: Array<RentOrderWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    startDate?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    endDate?: StringNullableFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    initialImages?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    completionImages?: StringNullableListFilter;
}
