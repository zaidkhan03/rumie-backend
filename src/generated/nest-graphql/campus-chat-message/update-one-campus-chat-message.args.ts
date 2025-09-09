import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatMessageUpdateInput } from './campus-chat-message-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CampusChatMessageWhereUniqueInput } from './campus-chat-message-where-unique.input';

@ArgsType()
export class UpdateOneCampusChatMessageArgs {

    @Field(() => CampusChatMessageUpdateInput, {nullable:false})
    @Type(() => CampusChatMessageUpdateInput)
    data!: CampusChatMessageUpdateInput;

    @Field(() => CampusChatMessageWhereUniqueInput, {nullable:false})
    @Type(() => CampusChatMessageWhereUniqueInput)
    where!: Prisma.AtLeast<CampusChatMessageWhereUniqueInput, 'id'>;
}
