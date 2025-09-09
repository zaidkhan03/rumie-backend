import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HobbyUpdateInput } from './hobby-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { HobbyWhereUniqueInput } from './hobby-where-unique.input';

@ArgsType()
export class UpdateOneHobbyArgs {

    @Field(() => HobbyUpdateInput, {nullable:false})
    @Type(() => HobbyUpdateInput)
    data!: HobbyUpdateInput;

    @Field(() => HobbyWhereUniqueInput, {nullable:false})
    @Type(() => HobbyWhereUniqueInput)
    where!: Prisma.AtLeast<HobbyWhereUniqueInput, 'id'>;
}
