import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AdminSessionWhereInput {

    @Field(() => [AdminSessionWhereInput], {nullable:true})
    AND?: Array<AdminSessionWhereInput>;

    @Field(() => [AdminSessionWhereInput], {nullable:true})
    OR?: Array<AdminSessionWhereInput>;

    @Field(() => [AdminSessionWhereInput], {nullable:true})
    NOT?: Array<AdminSessionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    token?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    valid?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    started?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    lastSeen?: DateTimeFilter;
}
