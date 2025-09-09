import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentDateTimeObjectEqualityInput } from './rent-date-time-object-equality.input';
import { RentDateTimeWhereInput } from '../rent-date-time/rent-date-time-where.input';

@InputType()
export class RentDateTimeCompositeFilter {

    @Field(() => RentDateTimeObjectEqualityInput, {nullable:true})
    equals?: RentDateTimeObjectEqualityInput;

    @Field(() => RentDateTimeWhereInput, {nullable:true})
    is?: RentDateTimeWhereInput;

    @Field(() => RentDateTimeWhereInput, {nullable:true})
    isNot?: RentDateTimeWhereInput;
}
