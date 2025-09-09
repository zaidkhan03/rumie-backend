import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CampusChatMessageWhereUniqueInput } from './campus-chat-message-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCampusChatMessageArgs {

    @Field(() => CampusChatMessageWhereUniqueInput, {nullable:false})
    @Type(() => CampusChatMessageWhereUniqueInput)
    where!: Prisma.AtLeast<CampusChatMessageWhereUniqueInput, 'id'>;
}
