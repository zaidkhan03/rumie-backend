import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DealWhereUniqueInput } from './deal-where-unique.input';
import { Type } from 'class-transformer';
import { DealCreateInput } from './deal-create.input';
import { DealUpdateInput } from './deal-update.input';

@ArgsType()
export class UpsertOneDealArgs {

    @Field(() => DealWhereUniqueInput, {nullable:false})
    @Type(() => DealWhereUniqueInput)
    where!: Prisma.AtLeast<DealWhereUniqueInput, 'id'>;

    @Field(() => DealCreateInput, {nullable:false})
    @Type(() => DealCreateInput)
    create!: DealCreateInput;

    @Field(() => DealUpdateInput, {nullable:false})
    @Type(() => DealUpdateInput)
    update!: DealUpdateInput;
}
