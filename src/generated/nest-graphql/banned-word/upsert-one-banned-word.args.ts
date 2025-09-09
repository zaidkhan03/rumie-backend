import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BannedWordWhereUniqueInput } from './banned-word-where-unique.input';
import { Type } from 'class-transformer';
import { BannedWordCreateInput } from './banned-word-create.input';
import { BannedWordUpdateInput } from './banned-word-update.input';

@ArgsType()
export class UpsertOneBannedWordArgs {

    @Field(() => BannedWordWhereUniqueInput, {nullable:false})
    @Type(() => BannedWordWhereUniqueInput)
    where!: Prisma.AtLeast<BannedWordWhereUniqueInput, 'id' | 'word'>;

    @Field(() => BannedWordCreateInput, {nullable:false})
    @Type(() => BannedWordCreateInput)
    create!: BannedWordCreateInput;

    @Field(() => BannedWordUpdateInput, {nullable:false})
    @Type(() => BannedWordUpdateInput)
    update!: BannedWordUpdateInput;
}
