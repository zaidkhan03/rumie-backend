import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateRangeCreateInput } from './date-range-create.input';
import { Type } from 'class-transformer';
import { DateRangeUpdateInput } from './date-range-update.input';

@InputType()
export class DateRangeUpdateEnvelopeInput {

    @Field(() => DateRangeCreateInput, {nullable:true})
    @Type(() => DateRangeCreateInput)
    set?: DateRangeCreateInput;

    @Field(() => DateRangeUpdateInput, {nullable:true})
    @Type(() => DateRangeUpdateInput)
    update?: DateRangeUpdateInput;
}
