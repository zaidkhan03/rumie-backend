import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BannedWordWhereUniqueInput } from './banned-word-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueBannedWordArgs {

    @Field(() => BannedWordWhereUniqueInput, {nullable:false})
    @Type(() => BannedWordWhereUniqueInput)
    where!: Prisma.AtLeast<BannedWordWhereUniqueInput, 'id' | 'word'>;
}
