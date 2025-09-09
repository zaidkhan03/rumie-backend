import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HobbyWhereUniqueInput } from './hobby-where-unique.input';
import { Type } from 'class-transformer';
import { HobbyCreateInput } from './hobby-create.input';
import { HobbyUpdateInput } from './hobby-update.input';

@ArgsType()
export class UpsertOneHobbyArgs {

    @Field(() => HobbyWhereUniqueInput, {nullable:false})
    @Type(() => HobbyWhereUniqueInput)
    where!: Prisma.AtLeast<HobbyWhereUniqueInput, 'id'>;

    @Field(() => HobbyCreateInput, {nullable:false})
    @Type(() => HobbyCreateInput)
    create!: HobbyCreateInput;

    @Field(() => HobbyUpdateInput, {nullable:false})
    @Type(() => HobbyUpdateInput)
    update!: HobbyUpdateInput;
}
