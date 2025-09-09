import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CampusChatCommentWhereInput {

    @Field(() => [CampusChatCommentWhereInput], {nullable:true})
    AND?: Array<CampusChatCommentWhereInput>;

    @Field(() => [CampusChatCommentWhereInput], {nullable:true})
    OR?: Array<CampusChatCommentWhereInput>;

    @Field(() => [CampusChatCommentWhereInput], {nullable:true})
    NOT?: Array<CampusChatCommentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    clientId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
