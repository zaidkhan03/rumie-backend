import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DealUpdateInput } from './deal-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DealWhereUniqueInput } from './deal-where-unique.input';

@ArgsType()
export class UpdateOneDealArgs {

    @Field(() => DealUpdateInput, {nullable:false})
    @Type(() => DealUpdateInput)
    data!: DealUpdateInput;

    @Field(() => DealWhereUniqueInput, {nullable:false})
    @Type(() => DealWhereUniqueInput)
    where!: Prisma.AtLeast<DealWhereUniqueInput, 'id'>;
}
