import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DateRange {

    @Field(() => Date, {nullable:false})
    startDate!: Date;

    @Field(() => Date, {nullable:false})
    endDate!: Date;
}
