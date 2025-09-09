import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DealUpdateManyMutationInput } from './deal-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DealWhereInput } from './deal-where.input';

@ArgsType()
export class UpdateManyDealArgs {

    @Field(() => DealUpdateManyMutationInput, {nullable:false})
    @Type(() => DealUpdateManyMutationInput)
    data!: DealUpdateManyMutationInput;

    @Field(() => DealWhereInput, {nullable:true})
    @Type(() => DealWhereInput)
    where?: DealWhereInput;
}
