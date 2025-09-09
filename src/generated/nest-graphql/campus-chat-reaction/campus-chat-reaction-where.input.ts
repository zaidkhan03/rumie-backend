import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumReactionTypeFilter } from '../prisma/enum-reaction-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CampusChatReactionWhereInput {

    @Field(() => [CampusChatReactionWhereInput], {nullable:true})
    AND?: Array<CampusChatReactionWhereInput>;

    @Field(() => [CampusChatReactionWhereInput], {nullable:true})
    OR?: Array<CampusChatReactionWhereInput>;

    @Field(() => [CampusChatReactionWhereInput], {nullable:true})
    NOT?: Array<CampusChatReactionWhereInput>;

    @Field(() => EnumReactionTypeFilter, {nullable:true})
    type?: EnumReactionTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
