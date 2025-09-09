import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentDateTimeCreateInput } from './rent-date-time-create.input';
import { Type } from 'class-transformer';
import { RentDateTimeUpdateInput } from './rent-date-time-update.input';

@InputType()
export class RentDateTimeUpdateEnvelopeInput {

    @Field(() => RentDateTimeCreateInput, {nullable:true})
    @Type(() => RentDateTimeCreateInput)
    set?: RentDateTimeCreateInput;

    @Field(() => RentDateTimeUpdateInput, {nullable:true})
    @Type(() => RentDateTimeUpdateInput)
    update?: RentDateTimeUpdateInput;
}
