import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DealCreateManyInput } from './deal-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDealArgs {

    @Field(() => [DealCreateManyInput], {nullable:false})
    @Type(() => DealCreateManyInput)
    data!: Array<DealCreateManyInput>;
}
