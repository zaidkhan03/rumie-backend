import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DealWhereUniqueInput } from './deal-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneDealArgs {

    @Field(() => DealWhereUniqueInput, {nullable:false})
    @Type(() => DealWhereUniqueInput)
    where!: Prisma.AtLeast<DealWhereUniqueInput, 'id'>;
}
