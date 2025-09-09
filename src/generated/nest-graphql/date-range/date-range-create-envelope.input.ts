import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateRangeCreateInput } from './date-range-create.input';
import { Type } from 'class-transformer';

@InputType()
export class DateRangeCreateEnvelopeInput {

    @Field(() => DateRangeCreateInput, {nullable:true})
    @Type(() => DateRangeCreateInput)
    set?: DateRangeCreateInput;
}
