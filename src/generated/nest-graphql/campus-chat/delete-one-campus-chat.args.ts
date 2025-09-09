import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CampusChatWhereUniqueInput } from './campus-chat-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneCampusChatArgs {

    @Field(() => CampusChatWhereUniqueInput, {nullable:false})
    @Type(() => CampusChatWhereUniqueInput)
    where!: Prisma.AtLeast<CampusChatWhereUniqueInput, 'id'>;
}
