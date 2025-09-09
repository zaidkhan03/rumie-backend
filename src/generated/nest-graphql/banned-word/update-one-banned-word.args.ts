import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannedWordUpdateInput } from './banned-word-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BannedWordWhereUniqueInput } from './banned-word-where-unique.input';

@ArgsType()
export class UpdateOneBannedWordArgs {

    @Field(() => BannedWordUpdateInput, {nullable:false})
    @Type(() => BannedWordUpdateInput)
    data!: BannedWordUpdateInput;

    @Field(() => BannedWordWhereUniqueInput, {nullable:false})
    @Type(() => BannedWordWhereUniqueInput)
    where!: Prisma.AtLeast<BannedWordWhereUniqueInput, 'id' | 'word'>;
}
