import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DealCreateInput } from './deal-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDealArgs {

    @Field(() => DealCreateInput, {nullable:false})
    @Type(() => DealCreateInput)
    data!: DealCreateInput;
}
