import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class RentDateTimeWhereInput {

    @Field(() => [RentDateTimeWhereInput], {nullable:true})
    AND?: Array<RentDateTimeWhereInput>;

    @Field(() => [RentDateTimeWhereInput], {nullable:true})
    OR?: Array<RentDateTimeWhereInput>;

    @Field(() => [RentDateTimeWhereInput], {nullable:true})
    NOT?: Array<RentDateTimeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    date?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    time?: StringFilter;
}
