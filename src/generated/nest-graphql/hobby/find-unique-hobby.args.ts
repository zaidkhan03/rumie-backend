import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HobbyWhereUniqueInput } from './hobby-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueHobbyArgs {

    @Field(() => HobbyWhereUniqueInput, {nullable:false})
    @Type(() => HobbyWhereUniqueInput)
    where!: Prisma.AtLeast<HobbyWhereUniqueInput, 'id'>;
}
