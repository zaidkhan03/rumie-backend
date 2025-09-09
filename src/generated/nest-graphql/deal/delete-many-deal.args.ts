import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DealWhereInput } from './deal-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDealArgs {

    @Field(() => DealWhereInput, {nullable:true})
    @Type(() => DealWhereInput)
    where?: DealWhereInput;
}
