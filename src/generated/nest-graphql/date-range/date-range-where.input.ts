import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DateRangeWhereInput {

    @Field(() => [DateRangeWhereInput], {nullable:true})
    AND?: Array<DateRangeWhereInput>;

    @Field(() => [DateRangeWhereInput], {nullable:true})
    OR?: Array<DateRangeWhereInput>;

    @Field(() => [DateRangeWhereInput], {nullable:true})
    NOT?: Array<DateRangeWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    startDate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    endDate?: DateTimeFilter;
}
