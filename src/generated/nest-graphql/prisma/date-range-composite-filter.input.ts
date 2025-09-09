import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateRangeObjectEqualityInput } from './date-range-object-equality.input';
import { DateRangeWhereInput } from '../date-range/date-range-where.input';

@InputType()
export class DateRangeCompositeFilter {

    @Field(() => DateRangeObjectEqualityInput, {nullable:true})
    equals?: DateRangeObjectEqualityInput;

    @Field(() => DateRangeWhereInput, {nullable:true})
    is?: DateRangeWhereInput;

    @Field(() => DateRangeWhereInput, {nullable:true})
    isNot?: DateRangeWhereInput;
}
